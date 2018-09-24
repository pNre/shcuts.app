import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import ValueComponent from '@/Components/Values/ValueComponent.vue';
import { Value, NewValue } from '@/Workflow/Value';
import { VueConstructor } from 'vue';

export default class DelayAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Delay',
        componentConstructor: () => ActionComponent,
    };

    public WFDelayTime?: Value;

    constructor(object: any) {
        if (object.WFWorkflowActionParameters.WFDelayTime) {
            this.WFDelayTime = NewValue(object.WFWorkflowActionParameters.WFDelayTime);
        }
    }

    public componentConstructor(): VueConstructor | null {
        if (this.WFDelayTime) {
            return this.WFDelayTime.componentConstructor();
        } else {
            return ValueComponent.extend({
                data: (() => {
                    return {
                        value: {
                            description: () => '1 Second',
                        },
                    };
                }),
            });
        }
    }
}
