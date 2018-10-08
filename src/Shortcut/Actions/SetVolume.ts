import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class SetVolumeAction extends Action implements DefaultContentProviding {
    public WFVolume?: Value;

    constructor(object: any) {
        super(() => 'Set Volume', object, () => ActionComponent, () => '🔊');
        this.WFVolume = NewValue(object.WFWorkflowActionParameters.WFVolume);
    }

    public defaultContent(): DefaultContent[] {
        if (!this.WFVolume) {
            return [];
        }

        return [{
            title: 'Volume',
            content: null,
            componentConstructor: () => this.WFVolume!.componentConstructor(),
        }];
    }
}
