import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import { Value, NewValue } from '@/Workflow/Value';
import ListActionComponent from '@/Components/Actions/ListActionComponent.vue';

export default class ListAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'List',
        componentConstructor: () => ListActionComponent,
    };

    public UUID?: string;
    public WFItems: [Value];

    constructor(object: any) {
        this.UUID = object.WFWorkflowActionParameters.UUID;
        this.WFItems = object.WFWorkflowActionParameters.WFItems.map(NewValue);
    }
}
