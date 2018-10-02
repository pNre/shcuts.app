import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class ShareAction extends Action {
    constructor(object: any) {
        super(() => 'Share', object, () => ActionComponent, () => '📮');
    }
}
