import { Action } from '@/Shortcut/Action';
import { Value, NewValue } from '@/Shortcut/Value';
import DictionaryActionComponent from '@/Components/Actions/DictionaryActionComponent.vue';

export default class DictionaryAction extends Action {
    public WFItems?: Value;

    constructor(object: any) {
        super(() => 'Dictionary', object, () => DictionaryActionComponent, () => '📖');
        this.WFItems = NewValue(object.WFWorkflowActionParameters.WFItems);
    }
}
