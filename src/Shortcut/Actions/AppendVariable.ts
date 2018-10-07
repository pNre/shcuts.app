import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class AppendVariableAction extends Action implements DefaultContentProviding {
    public WFVariableName?: Value;

    constructor(object: any) {
        super(() => 'Add to Variable', object, () => ActionComponent, () => '🔩');
        this.WFVariableName = NewValue(object.WFWorkflowActionParameters.WFVariableName);
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Variable',
            content: null,
            componentConstructor: this.WFVariableName ? () => this.WFVariableName!.componentConstructor() : null,
        }];
    }
}
