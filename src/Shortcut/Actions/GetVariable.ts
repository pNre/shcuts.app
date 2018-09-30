import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { NewValue, Value } from '@/Shortcut/Value';
import { VueConstructor } from 'vue';

export default class GetVariableAction extends Action {
    public WFVariable?: Value;

    constructor(object: any) {
        super(() => 'Get Variable', object, () => ActionComponent, () => '🔩');
        this.WFVariable = NewValue(object.WFWorkflowActionParameters.WFVariable);
    }

    public componentConstructor(): VueConstructor | null {
        if (!this.WFVariable) {
            return null;
        }

        return this.WFVariable.componentConstructor();
    }
}
