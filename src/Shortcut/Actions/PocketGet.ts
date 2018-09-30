import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class PocketGetAction extends Action implements DefaultContentProviding {
    public WFPocketItemState?: Value;
    public WFPocketItemCount?: Value;

    constructor(object: any) {
        super(() => 'Get Items from Pocket', object, () => ActionComponent);
        this.WFPocketItemState = NewValue(object.WFWorkflowActionParameters.WFPocketItemState);
        this.WFPocketItemCount = NewValue(object.WFWorkflowActionParameters.WFPocketItemCount);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFPocketItemState) {
            content.push({
                title: 'State',
                content: null,
                componentConstructor: () => this.WFPocketItemState!.componentConstructor(),
            });
        }

        if (this.WFPocketItemCount) {
            content.push({
                title: 'Count',
                content: null,
                componentConstructor: () => this.WFPocketItemCount!.componentConstructor(),
            });
        }

        return content;
    }
}
