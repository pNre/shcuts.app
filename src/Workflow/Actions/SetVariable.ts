import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class SetVariable implements Action {
    public component = {
        key: uuidv4(),
        name: 'Set Variable',
        componentConstructor: () => ActionComponent,
    };

    public WFVariableName: string;

    constructor(object: any) {
        this.WFVariableName = object.WFWorkflowActionParameters.WFVariableName;
    }

    public defaultContent(): Array<{ title: string, content: string }> {
        return [{
            title: 'Variable',
            content: this.WFVariableName,
        }];
    }
}
