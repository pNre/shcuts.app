import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class PauseMusicAction extends Action {
    constructor(object: any) {
        super(() => 'Pause Music', object, () => ActionComponent, () => '⏸');
    }
}
