import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class SetClipboardAction extends Action implements DefaultContentProviding {
    public WFLocalOnly: Value;
    public WFExpirationDate?: Value;

    constructor(object: any) {
        super(() => 'Copy to Clipboard', object, () => ActionComponent);
        this.WFLocalOnly = (NewValue(object.WFWorkflowActionParameters.WFLocalOnly) || NewValue(false))!;
        this.WFExpirationDate = NewValue(object.WFWorkflowActionParameters.WFExpirationDate);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Local Only',
            content: null,
            componentConstructor: () => this.WFLocalOnly.componentConstructor(),
        }];

        if (this.WFExpirationDate) {
            content.push({
                title: 'Expire At',
                content: null,
                componentConstructor: () => this.WFExpirationDate!.componentConstructor(),
            });
        }

        return content;
    }
}
