import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class NumberAction extends Action implements DefaultContentProviding {
    public WFNumberActionNumber?: Value;

    constructor(object: any) {
        super(() => 'Number', object, () => ActionComponent);
        this.WFNumberActionNumber = NewValue(object.WFWorkflowActionParameters.WFNumberActionNumber);
    }

    public defaultContent(): DefaultContent[] {
        if (!this.WFNumberActionNumber) {
            return [];
        }

        return [{
            title: 'Number',
            content: null,
            componentConstructor: () => this.WFNumberActionNumber!.componentConstructor(),
        }];
    }
}
