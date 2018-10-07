import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class GetDirectionsAction extends Action implements DefaultContentProviding {
    public WFGetDirectionsActionApp?: Value;
    public WFGetDirectionsActionMode?: Value;

    constructor(object: any) {
        super(() => 'Show Directions', object, () => ActionComponent);
        this.WFGetDirectionsActionApp = NewValue(object.WFWorkflowActionParameters.WFGetDirectionsActionApp);
        this.WFGetDirectionsActionMode = NewValue(object.WFWorkflowActionParameters.WFGetDirectionsActionMode);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFGetDirectionsActionApp) {
            content.push({
                title: 'Maps App',
                content: null,
                componentConstructor: () => this.WFGetDirectionsActionApp!.componentConstructor(),
            });
        }

        if (this.WFGetDirectionsActionMode) {
            content.push({
                title: 'Mode',
                content: null,
                componentConstructor: () => this.WFGetDirectionsActionMode!.componentConstructor(),
            });
        }

        return content;
    }
}
