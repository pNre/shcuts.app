import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class HandoffAction extends Action {
    constructor(object: any) {
        super(() => 'Continue Shortcut in App', object, () => ActionComponent);
    }
}
