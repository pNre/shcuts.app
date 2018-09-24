import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class DetectDictionaryAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Get Dictionary from Input',
        componentConstructor: () => ActionComponent,
    };

    public UUID?: string;

    constructor(object: any) {
        this.UUID = object.WFWorkflowActionParameters.UUID;
    }
}
