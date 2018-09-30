import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class GetMyWorkflowsAction extends Action {
    constructor(object: any) {
        super(() => 'Get My Workflows', object, () => ActionComponent);
    }
}
