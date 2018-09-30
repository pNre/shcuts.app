import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class GetDeviceDetailsAction extends Action implements DefaultContentProviding {
    public WFDeviceDetail?: Value;

    constructor(object: any) {
        super(() => 'Get Device Details', object, () => ActionComponent, () => '⚙️');
        this.WFDeviceDetail = NewValue(object.WFWorkflowActionParameters.WFDeviceDetail);
    }

    public defaultContent(): DefaultContent[] {
        if (!this.WFDeviceDetail) {
            return [];
        }

        return [{
            title: 'Get',
            content: null,
            componentConstructor: () => this.WFDeviceDetail!.componentConstructor(),
        }];
    }
}
