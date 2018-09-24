import { ComponentProvider } from '@/Workflow/ComponentProvider';
import ValueComponent from '@/Components/Values/ValueComponent.vue';
import { VueConstructor } from 'vue';
import { TextTokenString } from '@/Workflow/SerializedValues/TextTokenString';
import { TimeOffsetValue } from '@/Workflow/SerializedValues/TimeOffsetValue';
import { Attachment } from '@/Workflow/Attachment';

export enum SerializationType {
    TextTokenString = 'WFTextTokenString',
    TimeOffsetValue = 'WFTimeOffsetValue',
    TextTokenAttachment = 'WFTextTokenAttachment',
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
        }
    }

    public description(): string {
        return this.Value.description();
    }

    public componentConstructor(): VueConstructor {
        if ('componentConstructor' in this.Value) {
            return this.Value.componentConstructor();
        }

        return ValueComponent.extend({
            data: (() => {
                return {
                    value: this,
                };
            }),
        });
    }
}
