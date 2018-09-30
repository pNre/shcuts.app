import { Action } from '@/Shortcut/Action';
import GetTextActionComponent from '@/Components/Actions/GetTextComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class GetTextAction extends Action {
    public WFTextActionText?: Value;

    constructor(object: any) {
        super(() => 'Get Text', object, () => GetTextActionComponent);
        this.WFTextActionText = NewValue(object.WFWorkflowActionParameters.WFTextActionText);
    }
}
