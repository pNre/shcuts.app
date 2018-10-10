import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class TweetAction extends Action {
    constructor(object: any) {
        super(() => 'Tweet', object, () => ActionComponent);
    }
}
