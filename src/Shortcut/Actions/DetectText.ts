import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class DetectTextAction extends Action {
    constructor(object: any) {
        super(() => 'Get Text from Input', object, () => ActionComponent);
    }
}
