import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { NewValue, Value } from '@/Shortcut/Value';

export default class GetURLComponentAction extends Action implements DefaultContentProviding {
    public WFURLComponent?: Value;

    constructor(object: any) {
        super(() => 'Get Component of URL', object, () => ActionComponent, () => '🔗');
        this.WFURLComponent = NewValue(object.WFWorkflowActionParameters.WFURLComponent);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFURLComponent) {
            content.push({
                title: 'Component',
                content: null,
                componentConstructor: () => this.WFURLComponent!.componentConstructor(),
            });
        }

        return content;
    }
}
