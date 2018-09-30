import { Action } from '@/Shortcut/Action';
import { Value, NewValue } from '@/Shortcut/Value';
import ListActionComponent from '@/Components/Actions/ListActionComponent.vue';

export default class ListAction extends Action {
    public WFItems: [Value];

    constructor(object: any) {
        super(() => 'List', object, () => ListActionComponent, () => '📜');
        this.WFItems = object.WFWorkflowActionParameters.WFItems.map(NewValue).filter((x: Value | undefined) => x);
    }
}
