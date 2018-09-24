import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class RunWorkflowAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Run Shortcut',
        componentConstructor: () => ActionComponent,
    };

    public UUID?: string;
    public WFShowWorkflow: boolean;
    public WFWorkflowName: string;

    constructor(object: any) {
        this.UUID = object.WFWorkflowActionParameters.UUID;
        this.WFShowWorkflow = object.WFWorkflowActionParameters.WFShowWorkflow;
        this.WFWorkflowName = object.WFWorkflowActionParameters.WFWorkflowName;
    }

    public defaultContent(): Array<{ title: string, content: string }> {
        return [{
            title: 'Shortcut',
            content: this.WFWorkflowName,
        },
        {
            title: 'Show While Running',
            content: this.WFShowWorkflow ? 'True' : 'False',
        }];
    }
}
