import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Action } from '@/Shortcut/Action';

export default class GetRichTextFromHTMLAction extends Action {
    constructor(object: any) {
        super(() => 'Make Rich Text from HTML', object, () => ActionComponent);
    }
}
