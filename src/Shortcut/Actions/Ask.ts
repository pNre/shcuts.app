import { Action } from '@/Shortcut/Action';
import { Value, NewValue } from '@/Shortcut/Value';
import AskActionComponent from '@/Components/Actions/AskActionComponent.vue';

export default class AskAction extends Action {
    public WFAskActionDefaultAnswer?: Value;
    public WFAskActionPrompt?: Value;
    public WFInputType: string;

    constructor(object: any) {
        super(() => 'Ask for Input', object, () => AskActionComponent, () => '❓');
        this.WFAskActionDefaultAnswer = NewValue(object.WFWorkflowActionParameters.WFAskActionDefaultAnswer);
        this.WFAskActionPrompt = NewValue(object.WFWorkflowActionParameters.WFAskActionPrompt);
        this.WFInputType = object.WFWorkflowActionParameters.WFInputType || 'Text';
    }
}
