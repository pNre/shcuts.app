import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Action } from '@/Shortcut/Action';

export default class FileGetLinkAction extends Action {
    constructor(object: any) {
        super(() => 'Get Link to File', object, () => ActionComponent);
    }
}
