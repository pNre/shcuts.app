import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class TextChangeCaseAction extends Action implements DefaultContentProviding {
    public WFCaseType: Value;

    constructor(object: any) {
        super(() => 'Change Case', object, () => ActionComponent);
        this.WFCaseType = (NewValue(object.WFWorkflowActionParameters.WFCaseType) || NewValue('UPPERCASE'))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Case',
            content: null,
            componentConstructor: () => this.WFCaseType.componentConstructor(),
        }];
    }
}
