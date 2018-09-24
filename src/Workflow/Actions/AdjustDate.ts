import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import AdjustDateActionComponent from '@/Components/Actions/AdjustDateActionComponent.vue';
import { Value, NewValue } from '@/Workflow/Value';

export default class AdjustDateAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Adjust Date',
        componentConstructor: () => AdjustDateActionComponent,
    };

    public WFAdjustOffsetPicker: Value;

    constructor(source: any) {
        this.WFAdjustOffsetPicker = NewValue(source.WFWorkflowActionParameters.WFAdjustOffsetPicker);
    }
}
