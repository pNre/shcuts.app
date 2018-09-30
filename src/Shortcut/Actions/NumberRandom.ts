import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class NumberRandomAction extends Action implements DefaultContentProviding {
    public WFRandomNumberMinimum: Value;
    public WFRandomNumberMaximum: Value;

    constructor(object: any) {
        super(() => 'Random Number', object, () => ActionComponent, () => '🔮');
        this.WFRandomNumberMinimum = (NewValue(object.WFWorkflowActionParameters.WFRandomNumberMinimum) || NewValue(0))!;
        this.WFRandomNumberMaximum = (NewValue(object.WFWorkflowActionParameters.WFRandomNumberMaximum) || NewValue(100))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Minimum',
            content: null,
            componentConstructor: () => this.WFRandomNumberMinimum.componentConstructor(),
        }, {
            title: 'Maximum',
            content: null,
            componentConstructor: () => this.WFRandomNumberMaximum.componentConstructor(),
        }];
    }
}
