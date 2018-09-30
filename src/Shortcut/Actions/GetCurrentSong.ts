import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class GetCurrentSongAction extends Action {
    constructor(object: any) {
        super(() => 'Get Current Song', object, () => ActionComponent);
    }
}
