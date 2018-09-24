import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class ShowResultAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Show Result',
        componentConstructor: () => ActionComponent,
    };

    public Text: string;

    constructor(object: any) {
        this.Text = object.WFWorkflowActionParameters.Text;
    }

    public defaultContent(): Array<{ title: string, content: string }> {
        return [{
            title: 'Show',
            content: this.Text,
        }];
    }
}
