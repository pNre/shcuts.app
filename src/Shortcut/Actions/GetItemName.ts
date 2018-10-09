import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class GetItemNameAction extends Action {
    constructor(object: any) {
        super(() => 'Get Name', object, () => ActionComponent);
    }
}
