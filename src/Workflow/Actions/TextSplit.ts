import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class TextSplitAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Split Text',
        componentConstructor: () => ActionComponent,
    };

    public UUID?: string;
    public WFTextSeparator: string;

    constructor(object: any) {
        this.UUID = object.WFWorkflowActionParameters.UUID;
        this.WFTextSeparator = object.WFWorkflowActionParameters.WFTextSeparator;
    }

    public defaultContent(): Array<{ title: string, content: string }> {
        return [{
            title: 'Separator',
            content: this.WFTextSeparator,
        }];
    }
}
