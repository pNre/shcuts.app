import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { NewValue, Value } from '@/Workflow/Value';
import { VueConstructor } from 'vue';

export default class GetValueForKey implements Action {
    public component = {
        key: uuidv4(),
        name: 'Get Dictionary Value',
        componentConstructor: () => ActionComponent,
    };

    public UUID?: string;
    public WFDictionaryKey: Value;

    constructor(object: any) {
        this.UUID = object.WFWorkflowActionParameters.UUID;
        this.WFDictionaryKey = NewValue(object.WFWorkflowActionParameters.WFDictionaryKey);
    }

    public componentConstructor(): VueConstructor {
        return this.WFDictionaryKey.componentConstructor();
    }
}
