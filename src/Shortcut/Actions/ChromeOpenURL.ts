import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class ChromeOpenURLAction extends Action {
    constructor(object: any) {
        super(() => 'Open URLs in Chrome', object, () => ActionComponent, () => '🔗');
    }
}
