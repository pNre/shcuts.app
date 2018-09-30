import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';
import Vue, { VueConstructor } from 'vue';

export default class DelayAction extends Action {
    public WFDelayTime?: Value;

    constructor(object: any) {
        super(() => 'Wait', object, () => ActionComponent, () => '⏱');
        this.WFDelayTime = NewValue(object.WFWorkflowActionParameters.WFDelayTime);
    }

    public componentConstructor(): VueConstructor | null {
        if (this.WFDelayTime) {
            return this.WFDelayTime.componentConstructor();
        } else {
            return Vue.extend({
                render: (createElement) => {
                    return createElement('span', ['1 Second']);
                },
            });
        }
    }
}
