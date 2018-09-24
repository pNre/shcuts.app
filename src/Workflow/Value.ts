import { SerializedValue } from '@/Workflow/SerializedValue';
import { ComponentProvider } from '@/Workflow/ComponentProvider';
import ValueComponent from '@/Components/Values/ValueComponent.vue';
import { VueConstructor } from 'vue';
import { fail } from 'assert';

interface ValueType extends ComponentProvider {
    description(): string;
}

export class StringValue implements ValueType {
    public string: string;

    constructor(source: any) {
        this.string = source as string;
    }

    public componentConstructor(): VueConstructor {
        return ValueComponent.extend({
            data: (() => {
                return {
                    value: this,
                };
            }),
        });
    }

    public description(): string {
        return this.string;
    }
}

export class ItemValue implements ValueType {
    public WFItemType: number;
    public WFValue: SerializedValue;

    constructor(source: any) {
        this.WFItemType = source.WFItemType;
        this.WFValue = new SerializedValue(source.WFValue);
    }

    public componentConstructor(): VueConstructor {
        return this.WFValue.componentConstructor();
    }

    public description(): string {
        return this.WFValue.description();
    }
}

export type Value = ItemValue | StringValue | SerializedValue;

export function NewValue(source: any): Value {
    if (typeof source === 'string') {
        return new StringValue(source);
    } else if ('WFItemType' in source) {
        return new ItemValue(source);
    } else if ('WFSerializationType' in source) {
        return new SerializedValue(source);
    }

    console.log(source);
    return fail(`Unsupported value`);
}
