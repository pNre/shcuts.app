import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { NewValue, Value } from '@/Shortcut/Value';

export default class SetValueForKeyAction extends Action implements DefaultContentProviding {
    public WFDictionaryKey?: Value;
    public WFDictionaryValue?: Value;

    constructor(object: any) {
        super(() => 'Set Dictionary Value', object, () => ActionComponent, () => '📖');
        this.WFDictionaryKey = NewValue(object.WFWorkflowActionParameters.WFDictionaryKey);
        this.WFDictionaryValue = NewValue(object.WFWorkflowActionParameters.WFDictionaryValue);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFDictionaryKey) {
            content.push({
                title: 'Key',
                content: null,
                componentConstructor: () => this.WFDictionaryKey!.componentConstructor(),
            });
        }

        if (this.WFDictionaryValue) {
            content.push({
                title: 'Value',
                content: null,
                componentConstructor: () => this.WFDictionaryValue!.componentConstructor(),
            });
        }

        return content;
    }
}
