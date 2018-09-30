import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { NewValue, Value } from '@/Shortcut/Value';

export default class GetValueForKey extends Action implements DefaultContentProviding {
    public WFGetDictionaryValueType: string;
    public WFDictionaryKey?: Value;

    constructor(object: any) {
        super(() => 'Get Dictionary Value', object, () => ActionComponent);
        this.WFGetDictionaryValueType = object.WFWorkflowActionParameters.WFGetDictionaryValueType || 'Value';
        this.WFDictionaryKey = NewValue(object.WFWorkflowActionParameters.WFDictionaryKey);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Get',
            content: this.WFGetDictionaryValueType,
            componentConstructor: null,
        }];

        if (this.WFDictionaryKey) {
            content.push({
                title: 'Key',
                content: null,
                componentConstructor: () => this.WFDictionaryKey!.componentConstructor(),
            });
        }

        return content;
    }
}
