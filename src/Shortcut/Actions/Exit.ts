import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class ExitAction extends Action {
    constructor(object: any) {
        super(() => 'Exit Shortcut', object, () => ActionComponent, () => '🚪');
    }
}
