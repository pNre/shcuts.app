import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class GetIPAddressAction extends Action implements DefaultContentProviding {
    public WFIPAddressSourceOption?: Value;
    public WFIPAddressTypeOption?: Value;

    constructor(object: any) {
        super(() => 'Get Current IP Address', object, () => ActionComponent, () => '🌍');
        this.WFIPAddressSourceOption = (NewValue(object.WFWorkflowActionParameters.WFIPAddressSourceOption) || NewValue('External'))!;
        this.WFIPAddressTypeOption = (NewValue(object.WFWorkflowActionParameters.WFIPAddressTypeOption) || NewValue('IPv4'))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Address',
            content: null,
            componentConstructor: () => this.WFIPAddressSourceOption!.componentConstructor(),
        }, {
            title: 'Type',
            content: null,
            componentConstructor: () => this.WFIPAddressTypeOption!.componentConstructor(),
        }];
    }
}
