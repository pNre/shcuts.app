import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class FlashlightAction extends Action implements DefaultContentProviding {
    public WFFlashlightSetting: Value;

    constructor(object: any) {
        super(() => 'Set Torch', object, () => ActionComponent, () => '🔦');
        this.WFFlashlightSetting = (NewValue(object.WFWorkflowActionParameters.WFFlashlightSetting) || NewValue('On'))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Torch',
            content: null,
            componentConstructor: () => this.WFFlashlightSetting.componentConstructor(),
        }];
    }
}
