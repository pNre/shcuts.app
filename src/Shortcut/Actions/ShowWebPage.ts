import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class ShowWebPageAction extends Action implements DefaultContentProviding {
    public WFEnterSafariReader: Value;

    constructor(object: any) {
        super(() => 'Show Web Page', object, () => ActionComponent);
        this.WFEnterSafariReader = (NewValue(object.WFWorkflowActionParameters.WFEnterSafariReader) || NewValue(false))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Enter Safari Reader',
            content: null,
            componentConstructor: () => this.WFEnterSafariReader!.componentConstructor(),
        }];
    }
}
