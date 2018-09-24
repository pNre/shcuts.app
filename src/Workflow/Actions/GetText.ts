import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import GetTextActionComponent from '@/Components/Actions/GetTextComponent.vue';
import { Value, NewValue } from '@/Workflow/Value';

export default class GetTextAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Get Text',
        componentConstructor: () => GetTextActionComponent,
    };

    public UUID?: string;
    public WFTextActionText: Value;

    constructor(object: any) {
        this.UUID = object.WFWorkflowActionParameters.UUID;
        this.WFTextActionText = NewValue(object.WFWorkflowActionParameters.WFTextActionText);
    }
}
