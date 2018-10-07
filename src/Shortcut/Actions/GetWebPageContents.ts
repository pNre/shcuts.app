import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class GetWebPageContentsAction extends Action {
    constructor(object: any) {
        super(() => 'Get Contents of Web Page', object, () => ActionComponent);
    }
}
