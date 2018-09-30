import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class SetVariable extends Action implements DefaultContentProviding {
    public WFVariableName: string;

    constructor(object: any) {
        super(() => 'Set Variable', object, () => ActionComponent, () => '🔩');
        this.WFVariableName = object.WFWorkflowActionParameters.WFVariableName;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Variable',
            content: this.WFVariableName,
            componentConstructor: null,
        }];
    }
}
