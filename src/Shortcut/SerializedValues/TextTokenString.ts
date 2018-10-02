import { Attachment } from '@/Shortcut/SerializedValues/Attachment';
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
        return (this.tokens((x) => x.description()) as string[]).join('');
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                const mapToken = (value: Attachment) => {
                    return createElement('span', [createElement(value.componentConstructor())]);
                };
                return createElement('span', this.tokens(mapToken));
            },
        });
    }

    private tokens(mapToken: (value: Attachment) => any): any[] {
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

        if (indices.length === 0) {
            return [this.string];
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

            components.unshift(mapToken(data.attachment));

            if (i === sortedIndices.length - 1) {
                components.unshift(this.string.substring(0, offset));
            }
        }

        return components;
    }
}
