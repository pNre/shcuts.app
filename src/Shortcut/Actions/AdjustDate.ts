import { Action } from '@/Shortcut/Action';
import AdjustDateActionComponent from '@/Components/Actions/AdjustDateActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class AdjustDateAction extends Action {
    public WFAdjustOffsetPicker?: Value;

    constructor(source: any) {
        super(() => 'Adjust Date', source, () => AdjustDateActionComponent, () => '📅');
        this.WFAdjustOffsetPicker = NewValue(source.WFWorkflowActionParameters.WFAdjustOffsetPicker);
    }
}
