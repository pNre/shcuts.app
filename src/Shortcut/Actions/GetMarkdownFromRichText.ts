import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class GetMarkdownFromRichTextAction extends Action {
    constructor(object: any) {
        super(() => 'Make Markdown from Rich Text', object, () => ActionComponent);
    }
}
