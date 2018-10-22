import { SerializedValue } from '@/Shortcut/SerializedValue';
import { Attachment } from '@/Shortcut/SerializedValues/Attachment';
import { ComponentProvider } from '@/Shortcut/ComponentProvider';
import Vue, { VueConstructor } from 'vue';
import { fail } from 'assert';

abstract class ValueType implements ComponentProvider {
    public abstract description(): string;

    public get isEmpty(): boolean {
        return false;
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                return createElement('span', `${this.description()}`);
            },
        });
    }
}

export class BooleanValue extends ValueType {
    public bool: boolean;

    constructor(source: any) {
        super();
        this.bool = source as boolean;
    }

    public description(): string {
        return this.bool ? 'Yes' : 'No';
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                let attrs = { type: 'checkbox', disabled: 'disabled' };
                if (this.bool) {
                    attrs = Object.assign(attrs, { checked: 'checked' });
                }
                const field = createElement('input', { attrs });
                const icon = createElement('i', { class: 'form-icon' });
                return createElement('label', { class: 'form-switch' }, [field, icon]);
            },
        });
    }
}

export class StringValue extends ValueType {
    public string: string;

    constructor(source: any) {
        super();
        this.string = source as string;
    }

    public description(): string {
        return this.string;
    }

    public get isEmpty(): boolean {
        return super.isEmpty || this.string.length === 0;
    }
}

export class NumberValue extends ValueType {
    public number: number;

    constructor(source: any) {
        super();
        this.number = source as number;
    }

    public description(): string {
        return this.number.toLocaleString();
    }
}

export class ItemValue extends ValueType {
    public WFItemType: number;
    public WFValue: SerializedValue;

    constructor(source: any) {
        super();
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

export type Value = ItemValue | BooleanValue | StringValue | NumberValue | SerializedValue | Attachment;

export function NewValue(source: any): Value | undefined {
    if (source === undefined) {
        return undefined;
    }

    if (typeof source === typeof true) {
        return new BooleanValue(source);
    } else if (typeof source === 'string') {
        return new StringValue(source);
    } else if (typeof source === 'number') {
        return new NumberValue(source);
    } else if ('WFItemType' in source) {
        return new ItemValue(source);
    } else if ('WFSerializationType' in source) {
        return new SerializedValue(source);
    } else if ('Type' in source) {
        return new Attachment(source);
    }

    return fail(`Unsupported value`);
}
