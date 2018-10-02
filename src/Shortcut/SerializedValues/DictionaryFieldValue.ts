import Vue, { VueConstructor } from 'vue';
import { NewValue, Value } from '@/Shortcut/Value';

export class DictionaryEntry {
    public WFItemType: number;
    public WFKey?: Value;
    public WFValue?: Value;

    constructor(source: any) {
        this.WFItemType = source.WFItemType;

        if (this.WFItemType === 0 || this.WFItemType === 1) {
            this.WFKey = NewValue(source.WFKey);
            this.WFValue = NewValue(source.WFValue);
        } else {
            this.WFKey = NewValue(source.WFContactProperty);
            this.WFValue = NewValue(source.WFContactMultivalue);
        }
    }

    public description(): string {
        return `DictionaryEntry: ${this.WFKey ? this.WFKey!.description() : ''} -> ${this.WFValue ? this.WFValue!.description() : ''}`;
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                const constructors: any[] = [];

                if (this.WFKey && 'componentConstructor' in this.WFKey) {
                    constructors.push(createElement('dt', [createElement(this.WFKey.componentConstructor())]));
                }

                if (this.WFValue && 'componentConstructor' in this.WFValue) {
                    constructors.push(createElement('dd', [createElement(this.WFValue.componentConstructor())]));
                }

                return createElement('span', constructors);
            },
        });
    }
}

export class DictionaryFieldValue {
    public WFDictionaryFieldValueItems: DictionaryEntry[];
    private rawWFDictionaryFieldValueItems: any;

    constructor(source: any) {
        this.rawWFDictionaryFieldValueItems = source.WFDictionaryFieldValueItems;
        this.WFDictionaryFieldValueItems = source.WFDictionaryFieldValueItems.map((x: any) => new DictionaryEntry(x));
    }

    public description(): string {
        return JSON.stringify(this.rawWFDictionaryFieldValueItems);
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                const content = this.WFDictionaryFieldValueItems
                    .map(this.mapEntry)
                    .filter((x) => x !== null)
                    .map((x) => createElement(x!));
                return createElement('ul', content);
            },
        });
    }

    private mapEntry(entry: DictionaryEntry): VueConstructor | null {
        if (!entry.WFValue || !('componentConstructor' in entry.WFValue)) {
            return null;
        }

        return Vue.extend({
            render: (createElement) => {
                return createElement('dl', [createElement(entry.componentConstructor())]);
            },
        });
    }
}
