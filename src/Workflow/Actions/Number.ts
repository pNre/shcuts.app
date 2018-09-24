import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class NumberAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Number',
        componentConstructor: () => ActionComponent,
    };

    public UUID?: string;
    public WFNumberActionNumber: number;

    constructor(object: any) {
        this.UUID = object.WFWorkflowActionParameters.UUID;
        this.WFNumberActionNumber = object.WFWorkflowActionParameters.WFNumberActionNumber;
    }

    public defaultContent(): Array<{ title: string, content: string }> {
        return [{
            title: 'Number',
            content: this.WFNumberActionNumber.toLocaleString(),
        }];
    }
}
