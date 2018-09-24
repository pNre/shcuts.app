import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class PropertiesMusicAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Get Details of Music',
        componentConstructor: () => ActionComponent,
    };

    public UUID?: string;
    public CustomOutputName?: string;
    public WFContentItemPropertyName?: string;

    constructor(object: any) {
        this.UUID = object.WFWorkflowActionParameters.UUID;
        this.CustomOutputName = object.WFWorkflowActionParameters.CustomOutputName;
        this.WFContentItemPropertyName = object.WFWorkflowActionParameters.WFContentItemPropertyName;
    }

    public defaultContent(): Array<{ title: string, content: string }> {
        return [{
            title: 'Get',
            content: this.CustomOutputName || this.WFContentItemPropertyName || '',
        }];
    }
}
