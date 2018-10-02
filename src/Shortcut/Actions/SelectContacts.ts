import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class SelectContactsAction extends Action implements DefaultContentProviding {
    public WFSelectMultiple: Value;

    constructor(object: any) {
        super(() => 'Select Contact', object, () => ActionComponent, () => '👤');
        this.WFSelectMultiple = (NewValue(object.WFWorkflowActionParameters.WFSelectMultiple) || NewValue(false))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Select Multiple',
            content: null,
            componentConstructor: () => this.WFSelectMultiple.componentConstructor(),
        }];
    }
}
