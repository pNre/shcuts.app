import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class OpenAppAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Open App',
        componentConstructor: () => ActionComponent,
    };

    public WFAppIdentifier: string;

    constructor(object: any) {
        this.WFAppIdentifier = object.WFWorkflowActionParameters.WFAppIdentifier;
    }

    public defaultContent(): Array<{ title: string, content: string }> {
        return [{
            title: 'App',
            content: this.WFAppIdentifier,
        }];
    }
}
