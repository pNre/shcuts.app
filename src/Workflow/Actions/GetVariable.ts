import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { NewValue, Value } from '@/Workflow/Value';
import { VueConstructor } from 'vue';

export default class GetVariableAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Get Variable',
        componentConstructor: () => ActionComponent,
    };

    public WFVariable: Value;

    constructor(object: any) {
        this.WFVariable = NewValue(object.WFWorkflowActionParameters.WFVariable);
    }

    public componentConstructor(): VueConstructor {
        return this.WFVariable.componentConstructor();
    }
}
