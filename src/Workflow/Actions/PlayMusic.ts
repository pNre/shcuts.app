import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class PlayMusicAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Play Music',
        componentConstructor: () => ActionComponent,
    };

    public UUID?: string;

    constructor(object: any) {
        this.UUID = object.WFWorkflowActionParameters.UUID;
    }
}
