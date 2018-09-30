import Vue, { VueConstructor } from 'vue';
import { Value, NewValue } from '@/Shortcut/Value';

export class TimeOffsetValue {
    public Operation: string;
    public Unit: string;
    public Value?: Value;

    constructor(source: any) {
        this.Operation = source.Operation;
        this.Unit = source.Unit;
        this.Value = NewValue(source.Value);
    }

    public description(): string {
        return `${this.Operation} (${this.Value!.description()}) ${this.Unit}(s)`;
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                const value = createElement(this.Value!.componentConstructor());
                return createElement('div', [createElement('span', this.Operation), value, this.Unit]);
            },
        });
    }
}
