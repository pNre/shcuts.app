import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class CountAction extends Action implements DefaultContentProviding {
    public WFCountType?: Value;

    constructor(object: any) {
        super(() => 'Count', object, () => ActionComponent);
        this.WFCountType = NewValue(object.WFWorkflowActionParameters.WFCountType);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFCountType) {
            content.push({
                title: 'Count',
                content: null,
                componentConstructor: () => this.WFCountType!.componentConstructor(),
            });
        }

        return content;
    }
}
