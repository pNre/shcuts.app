import Vue, { VueConstructor } from 'vue';
import { Value, NewValue } from '@/Shortcut/Value';

export class QuantityFieldValue {
    public Unit: string;
    public Magnitude?: Value;

    constructor(source: any) {
        this.Unit = source.Unit;
        this.Magnitude = NewValue(source.Magnitude);
    }

    public description(): string {
        const components: any[] = [];

        if (this.Magnitude) {
            components.push(this.Magnitude!.description);
        }

        components.push(this.Unit);
        return components.join(' ');
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                const children: any[] = [];

                if (this.Magnitude) {
                    children.push(createElement(this.Magnitude.componentConstructor()));
                }

                children.push(this.Unit);
                return createElement('span', children);
            },
        });
    }
}
