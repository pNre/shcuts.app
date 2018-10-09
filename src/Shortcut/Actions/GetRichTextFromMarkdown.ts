import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class GetRichTextFromMarkdownAction extends Action {
    constructor(object: any) {
        super(() => 'Make Rich Text from Markdown', object, () => ActionComponent);
    }
}
