import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class GetClipboardAction extends Action {
    constructor(object: any) {
        super(() => 'Get Clipboard', object, () => ActionComponent);
    }
}
