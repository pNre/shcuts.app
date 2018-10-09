import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class PlaySoundAction extends Action {
    constructor(object: any) {
        super(() => 'Play Sound', object, () => ActionComponent, () => '🔈');
    }
}
