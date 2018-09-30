import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class GetWifiAction extends Action implements DefaultContentProviding {
    public WFNetworkDetailsNetwork: Value;
    public WFCellularDetail?: Value;
    public WFWiFiDetail?: Value;

    constructor(object: any) {
        super(() => 'Get Network Details', object, () => ActionComponent, () => '📡️');
        this.WFNetworkDetailsNetwork = (NewValue(object.WFWorkflowActionParameters.WFNetworkDetailsNetwork) || NewValue('Wi-Fi'))!;

        if (object.WFWorkflowActionParameters.WFCellularDetail) {
            this.WFCellularDetail = NewValue(object.WFWorkflowActionParameters.WFCellularDetail);
        } else if (this.WFNetworkDetailsNetwork.description() === 'Cellular') {
            this.WFCellularDetail = NewValue('Carrier Name');
        }

        if (object.WFWorkflowActionParameters.WFWiFiDetail) {
            this.WFWiFiDetail = NewValue(object.WFWorkflowActionParameters.WFWiFiDetail);
        } else if (this.WFNetworkDetailsNetwork.description() === 'Wi-Fi') {
            this.WFWiFiDetail = NewValue('Network Name');
        }
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Network',
            content: null,
            componentConstructor: () => this.WFNetworkDetailsNetwork!.componentConstructor(),
        }];

        if (this.WFWiFiDetail) {
            content.push({
                title: 'Get',
                content: null,
                componentConstructor: () => this.WFWiFiDetail!.componentConstructor(),
            });
        }

        if (this.WFCellularDetail) {
            content.push({
                title: 'Get',
                content: null,
                componentConstructor: () => this.WFCellularDetail!.componentConstructor(),
            });
        }

        return content;
    }
}
