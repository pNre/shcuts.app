import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class TextReplaceAction extends Action implements DefaultContentProviding {
    public WFReplaceTextFind?: Value;
    public WFReplaceTextReplace?: Value;
    public WFReplaceTextCaseSensitive: Value;
    public WFReplaceTextRegularExpression: Value;

    constructor(object: any) {
        super(() => 'Replace Text', object, () => ActionComponent);
        this.WFReplaceTextCaseSensitive = (NewValue(object.WFWorkflowActionParameters.WFReplaceTextCaseSensitive) || NewValue(true))!;
        this.WFReplaceTextFind = NewValue(object.WFWorkflowActionParameters.WFReplaceTextFind);
        this.WFReplaceTextReplace = NewValue(object.WFWorkflowActionParameters.WFReplaceTextReplace);
        const regex = NewValue(object.WFWorkflowActionParameters.WFReplaceTextRegularExpression);
        if (regex) {
            this.WFReplaceTextRegularExpression = regex;
        } else {
            this.WFReplaceTextRegularExpression = NewValue(false)!;
        }
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFReplaceTextFind) {
            content.push({
                title: 'Find Text',
                content: null,
                componentConstructor: () => this.WFReplaceTextFind!.componentConstructor(),
            });
        }

        if (this.WFReplaceTextReplace) {
            content.push({
                title: 'Replace With',
                content: null,
                componentConstructor: () => this.WFReplaceTextReplace!.componentConstructor(),
            });
        }

        content.push({
            title: 'Case Sensitive',
            content: null,
            componentConstructor: () => this.WFReplaceTextCaseSensitive.componentConstructor(),
        });

        content.push({
            title: 'Regular Expression',
            content: null,
            componentConstructor: () => this.WFReplaceTextRegularExpression.componentConstructor(),
        });

        return content;
    }
}
