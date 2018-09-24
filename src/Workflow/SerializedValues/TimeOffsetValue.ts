import Vue, { VueConstructor } from 'vue';
import ChipComponent from '@/Components/Generic/ChipComponent.vue';
import { Attachment } from '@/Workflow/Attachment';

export class TimeOffsetValue {
    public Operation: string;
    public Unit: string;
    public Value: Attachment;

    constructor(source: any) {
        this.Operation = source.Operation;
        this.Unit = source.Unit;
        this.Value = new Attachment(source.Value);
    }

    public description(): string {
        return `${this.Operation} (${this.Value.description()}) ${this.Unit}(s)`;
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                const value = createElement('ChipComponent', {
                    props: {
                        value: this.Value.description(),
                    },
                });

                return createElement('div', {
                    style: {
                        'display': 'flex',
                        'align-items': 'center',
                    },
                }, [createElement('span', this.Operation), value, this.Unit]);
            },
            components: {
                ChipComponent,
            },
        });
    }
}
