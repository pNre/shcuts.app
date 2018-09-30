import Vue, { VueConstructor } from 'vue';
import { NewValue, Value } from '@/Shortcut/Value';

class DictionaryEntry {
    public WFItemType: number;
    public WFKey?: Value;
    public WFValue?: Value;

    constructor(source: any) {
        this.WFItemType = source.WFItemType,
        this.WFKey = NewValue(source.WFContactProperty);
        this.WFValue = NewValue(source.WFContactMultivalue);
    }
}

export class DictionaryFieldValue {
    public WFDictionaryFieldValueItems: DictionaryEntry[];
    private _WFDictionaryFieldValueItems: any;

    constructor(source: any) {
        this._WFDictionaryFieldValueItems = source.WFDictionaryFieldValueItems;
        this.WFDictionaryFieldValueItems = source.WFDictionaryFieldValueItems.map((x: any) => new DictionaryEntry(x));
    }

    public description(): string {
        return JSON.stringify(this._WFDictionaryFieldValueItems);
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                const content = JSON.stringify(this._WFDictionaryFieldValueItems);
                return createElement('pre', { class: 'code' }, content);
            },
        });
    }
}
