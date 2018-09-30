import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class GetItemFromListAction extends Action implements DefaultContentProviding {
    public WFItemSpecifier: Value;

    constructor(object: any) {
        super(() => 'Get Item from List', object, () => ActionComponent);
        this.WFItemSpecifier = (NewValue(object.WFWorkflowActionParameters.WFItemSpecifier) || NewValue('First Item'))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Get',
            content: null,
            componentConstructor: () => this.WFItemSpecifier.componentConstructor(),
        }];
    }
}
