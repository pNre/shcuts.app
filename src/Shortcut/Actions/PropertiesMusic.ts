import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class PropertiesMusicAction extends Action implements DefaultContentProviding {
    public CustomOutputName?: string;
    public WFContentItemPropertyName?: Value;

    constructor(object: any) {
        super(() => 'Get Details of Music', object, () => ActionComponent);
        this.CustomOutputName = object.WFWorkflowActionParameters.CustomOutputName;
        this.WFContentItemPropertyName = NewValue(object.WFWorkflowActionParameters.WFContentItemPropertyName);
    }

    public defaultContent(): DefaultContent[] {
        if (this.WFContentItemPropertyName) {
            return [{
                title: 'Get',
                content: null,
                componentConstructor: () => this.WFContentItemPropertyName!.componentConstructor(),
            }];
        } else if (this.CustomOutputName) {
            return [{
                title: 'Get',
                content: this.CustomOutputName,
                componentConstructor: null,
            }];
        } else {
            return [];
        }
    }
}
