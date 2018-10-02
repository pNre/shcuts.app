import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class DetectLinkAction extends Action {
    constructor(object: any) {
        super(() => 'Get URLs from Input', object, () => ActionComponent, () => '🔗');
    }
}
