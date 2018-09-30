import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class VibrateAction extends Action {
    constructor(object: any) {
        super(() => 'Vibrate Device', object, () => ActionComponent);
    }
}
