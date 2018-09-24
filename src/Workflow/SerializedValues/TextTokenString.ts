import { Attachment } from '@/Workflow/Attachment';
import ChipComponent from '@/Components/Generic/ChipComponent.vue';
import Vue, { VueConstructor } from 'vue';

export class TextTokenString {
    public string: string;
    public attachmentsByRange: { [key: string]: Attachment } = {};

    constructor(source: any) {
        this.string = source.string as string;
        const attachments = source.attachmentsByRange as { [key: string]: any };
        for (const [key, value] of Object.entries(attachments)) {
            this.attachmentsByRange[key] = new Attachment(value);
        }
    }

    public description(): string {
        return this.tokens((x) => x).join('');
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                const makeChipComponent = (value: string) => createElement('ChipComponent', { props: { value } });
                return createElement('div', {
                    style: {
                        'display': 'flex',
                        'align-items': 'center',
                    },
                }, this.tokens(makeChipComponent));
            },
            components: {
                ChipComponent,
            },
        });
    }

    private tokens(mapChipComponent: (value: string) => any): any[] {
        const rangePattern = /{(\d+),(?:\s+)?(\d+)}/;
        const offsets: { [key: number]: { length: number, attachment: Attachment } } = {};
        const indices: number[] = [];

        for (const [range, attachment] of Object.entries(this.attachmentsByRange)) {
            const result = rangePattern.exec(range)!;
            const offset = parseInt(result[1], 10);

            indices.push(offset);
            offsets[offset] = {
                length: parseInt(result[2], 10),
                attachment,
            };
        }

        const components: any[] = [];
        const sortedIndices = indices.sort((a, b) => b - a);

        for (const [i, offset] of sortedIndices.entries()) {
            const data = offsets[offset];

            if (i === 0) {
                components.unshift(this.string.substring(offset + data.length));
            } else {
                components.unshift(this.string.substring(offset + data.length, sortedIndices[i - 1]));
            }

            components.unshift(mapChipComponent(data.attachment.description()));

            if (i === sortedIndices.length - 1) {
                components.unshift(this.string.substring(0, offset));
            }
        }

        return components;
    }
}
