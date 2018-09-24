import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import { Value, NewValue } from '@/Workflow/Value';
import AskActionComponent from '@/Components/Actions/AskActionComponent.vue';

export default class AskAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Ask for Input',
        componentConstructor: () => AskActionComponent,
    };

    public WFAskActionDefaultAnswer: Value;
    public WFAskActionPrompt: Value;
    public WFInputType: string;

    constructor(object: any) {
        this.WFAskActionDefaultAnswer = NewValue(object.WFWorkflowActionParameters.WFAskActionDefaultAnswer);
        this.WFAskActionPrompt = NewValue(object.WFWorkflowActionParameters.WFAskActionPrompt);
        this.WFInputType = object.WFWorkflowActionParameters.WFInputType || 'Text';
    }
}
