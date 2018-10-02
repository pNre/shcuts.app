import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class SetBrightnessAction extends Action implements DefaultContentProviding {
    public WFBrightness?: Value;

    constructor(object: any) {
        super(() => 'Set Brightness', object, () => ActionComponent, () => '💡');
        this.WFBrightness = NewValue(object.WFWorkflowActionParameters.WFBrightness);
    }

    public defaultContent(): DefaultContent[] {
        if (!this.WFBrightness) {
            return [];
        }

        return [{
            title: 'Brightness',
            content: null,
            componentConstructor: () => this.WFBrightness!.componentConstructor(),
        }];
    }
}
