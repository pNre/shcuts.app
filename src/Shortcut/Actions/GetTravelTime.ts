import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { NewValue, Value } from '@/Shortcut/Value';

export default class GetTravelTimeAction extends Action implements DefaultContentProviding {
    public WFGetDirectionsActionMode?: Value;
    public WFGetDirectionsFrom: Value;
    public WFGetDirectionsCustomLocation?: Value;

    constructor(object: any) {
        super(() => 'Get Travel Time', object, () => ActionComponent);
        this.WFGetDirectionsActionMode = NewValue(object.WFWorkflowActionParameters.WFGetDirectionsActionMode);
        this.WFGetDirectionsFrom = (NewValue(object.WFWorkflowActionParameters.WFGetDirectionsFrom) || NewValue('Current Location'))!;
        this.WFGetDirectionsCustomLocation = NewValue(object.WFWorkflowActionParameters.WFGetDirectionsCustomLocation);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        content.push({
            title: 'From',
            content: null,
            componentConstructor: () => this.WFGetDirectionsFrom!.componentConstructor(),
        });

        if (this.WFGetDirectionsCustomLocation) {
            content.push({
                title: 'Location',
                content: null,
                componentConstructor: () => this.WFGetDirectionsCustomLocation!.componentConstructor(),
            });
        }

        if (this.WFGetDirectionsActionMode) {
            content.push({
                title: 'Transport Mode',
                content: null,
                componentConstructor: () => this.WFGetDirectionsActionMode!.componentConstructor(),
            });
        }

        return content;
    }
}
