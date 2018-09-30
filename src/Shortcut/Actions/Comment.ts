import { Action } from '@/Shortcut/Action';
import CommentComponent from '@/Components/Actions/CommentComponent.vue';

export default class CommentAction extends Action {
    public WFCommentActionText?: string;

    constructor(object: any) {
        super(() => 'Comment', object, () => CommentComponent, () => '🗣');
        this.WFCommentActionText = object.WFWorkflowActionParameters.WFCommentActionText;
    }
}
