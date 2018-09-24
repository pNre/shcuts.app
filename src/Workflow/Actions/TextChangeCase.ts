import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class TextChangeCaseAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Change Case',
        componentConstructor: () => ActionComponent,
    };

    public UUID?: string;
    public WFCaseType: string;

    constructor(object: any) {
        this.UUID = object.WFWorkflowActionParameters.UUID;
        this.WFCaseType = object.WFWorkflowActionParameters.WFCaseType;
    }

    public defaultContent(): Array<{ title: string, content: string }> {
        return [{
            title: 'Case',
            content: this.WFCaseType,
        }];
    }
}
