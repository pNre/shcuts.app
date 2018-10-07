import { ComponentProvider } from '@/Shortcut/ComponentProvider';
import Vue, { VueConstructor } from 'vue';
import { TextTokenString } from '@/Shortcut/SerializedValues/TextTokenString';
import { TimeOffsetValue } from '@/Shortcut/SerializedValues/TimeOffsetValue';
import { Attachment } from '@/Shortcut/SerializedValues/Attachment';
import { ContactFieldValue } from '@/Shortcut/SerializedValues/ContactFieldValue';
import { DictionaryFieldValue } from '@/Shortcut/SerializedValues/DictionaryFieldValue';
import { ContentPredicateTableTemplate } from '@/Shortcut/SerializedValues/ContentPredicateTableTemplate';
import { NewValue } from '@/Shortcut/Value';
import { QuantityFieldValue } from '@/Shortcut/SerializedValues/QuantityFieldValue';

export enum SerializationType {
    TextTokenString = 'WFTextTokenString',
    TimeOffsetValue = 'WFTimeOffsetValue',
    TextTokenAttachment = 'WFTextTokenAttachment',
    ContactFieldValue = 'WFContactFieldValue',
    DictionaryFieldValue = 'WFDictionaryFieldValue',
    ContentPredicateTableTemplate = 'WFContentPredicateTableTemplate',
    QuantityFieldValue = 'WFQuantityFieldValue',
}

export class SerializedValue implements ComponentProvider {
    public WFSerializationType: SerializationType;
    public Value: any;

    constructor(source: any) {
        this.WFSerializationType = source.WFSerializationType;
        switch (this.WFSerializationType) {
            case SerializationType.TextTokenString:
                this.Value = new TextTokenString(source.Value);
                break;
            case SerializationType.TimeOffsetValue:
                this.Value = new TimeOffsetValue(source.Value);
                break;
            case SerializationType.TextTokenAttachment:
                this.Value = new Attachment(source.Value);
                break;
            case SerializationType.ContactFieldValue:
                this.Value = new ContactFieldValue(source.Value);
                break;
            case SerializationType.DictionaryFieldValue:
                if ('WFDictionaryFieldValueItems' in source.Value) {
                    this.Value = new DictionaryFieldValue(source.Value);
                } else {
                    this.Value = NewValue(source.Value);
                }
                break;
            case SerializationType.ContentPredicateTableTemplate:
                this.Value = new ContentPredicateTableTemplate(source.Value);
                break;
            case SerializationType.QuantityFieldValue:
                this.Value = new QuantityFieldValue(source.Value);
                break;
        }
    }

    public description(): string {
        return this.Value.description();
    }

    public get isEmpty(): boolean {
        if (!('isEmpty' in this.Value)) {
            return false;
        }

        return this.Value.isEmpty;
    }

    public componentConstructor(): VueConstructor {
        if ('componentConstructor' in this.Value) {
            return this.Value.componentConstructor();
        }

        return Vue.extend({
            render: (createElement) => {
                return createElement('span', [this.description()]);
            },
        });
    }
}
