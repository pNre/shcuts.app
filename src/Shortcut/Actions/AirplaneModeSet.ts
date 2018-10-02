import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class AirplaneModeSetAction extends Action implements DefaultContentProviding {
    public OnValue: Value;

    constructor(object: any) {
        super(() => 'Set Airplane Mode', object, () => ActionComponent, () => '🛩');
        this.OnValue = (NewValue(object.WFWorkflowActionParameters.OnValue) || NewValue(true))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Airplane Mode',
            content: null,
            componentConstructor: () => this.OnValue.componentConstructor(),
        }];
    }
}
