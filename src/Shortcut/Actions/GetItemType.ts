import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Action } from '@/Shortcut/Action';

export default class GetItemTypeAction extends Action {
    constructor(object: any) {
        super(() => 'Get Type', object, () => ActionComponent);
    }
}
