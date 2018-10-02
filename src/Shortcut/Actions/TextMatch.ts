import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class TextMatchAction extends Action implements DefaultContentProviding {
    public WFMatchTextCaseSensitive: Value;
    public WFMatchTextPattern: Value;

    constructor(object: any) {
        super(() => 'Replace Text', object, () => ActionComponent);
        this.WFMatchTextCaseSensitive = (NewValue(object.WFWorkflowActionParameters.WFMatchTextCaseSensitive) || NewValue(true))!;
        const regex = NewValue(object.WFWorkflowActionParameters.WFMatchTextPattern);
        if (regex) {
            this.WFMatchTextPattern = regex;
        } else {
            this.WFMatchTextPattern = NewValue(false)!;
        }
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        content.push({
            title: 'Pattern',
            content: null,
            componentConstructor: () => this.WFMatchTextPattern.componentConstructor(),
        });

        content.push({
            title: 'Case Sensitive',
            content: null,
            componentConstructor: () => this.WFMatchTextCaseSensitive.componentConstructor(),
        });

        return content;
    }
}
