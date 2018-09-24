import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class FlashlightAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Set Torch',
        componentConstructor: () => ActionComponent,
    };

    public WFFlashlightSetting: string;

    constructor(object: any) {
        this.WFFlashlightSetting = object.WFWorkflowActionParameters.WFFlashlightSetting;
    }

    public defaultContent(): Array<{ title: string, content: string }> {
        return [{
            title: 'Torch',
            content: this.WFFlashlightSetting,
        }];
    }
}
