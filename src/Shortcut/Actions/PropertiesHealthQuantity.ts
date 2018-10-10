import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class PropertiesHealthQuantityAction extends Action implements DefaultContentProviding {
    public WFContentItemPropertyName?: Value;

    constructor(object: any) {
        super(() => 'Get Details of Health Sample', object, () => ActionComponent, () => '🧡');
        this.WFContentItemPropertyName = NewValue(object.WFWorkflowActionParameters.WFContentItemPropertyName);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFContentItemPropertyName) {
            content.push({
                title: 'Get',
                content: null,
                componentConstructor: () => this.WFContentItemPropertyName!.componentConstructor(),
            });
        }

        return content;
    }
}
