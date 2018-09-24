import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class SpeakTextAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Speak Text',
        componentConstructor: () => ActionComponent,
    };

    public WFSpeakTextLanguage: string;
    public WFSpeakTextWait: boolean;

    constructor(object: any) {
        this.WFSpeakTextLanguage = object.WFWorkflowActionParameters.WFSpeakTextLanguage;
        this.WFSpeakTextWait = object.WFWorkflowActionParameters.WFSpeakTextWait;
    }

    public defaultContent(): Array<{ title: string, content: string }> {
        return [
            {
                title: 'Language',
                content: this.WFSpeakTextLanguage,
            },
            {
                title: 'Wait',
                content: this.WFSpeakTextWait ? 'True' : 'False',
            },
        ];
    }
}
