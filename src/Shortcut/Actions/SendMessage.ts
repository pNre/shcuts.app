import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class SendMessageAction extends Action implements DefaultContentProviding {
    public IntentAppIdentifier?: Value;
    public WFSendMessageContent?: Value;
    public WFSendMessageActionRecipients?: Value;
    public ShowWhenRun: Value;

    constructor(object: any) {
        super(() => 'Send Message', object, () => ActionComponent);
        this.IntentAppIdentifier = NewValue(object.WFWorkflowActionParameters.IntentAppIdentifier);
        this.WFSendMessageContent = NewValue(object.WFWorkflowActionParameters.WFSendMessageContent);
        this.WFSendMessageActionRecipients = NewValue(object.WFWorkflowActionParameters.WFSendMessageActionRecipients);
        this.ShowWhenRun = (NewValue(object.WFWorkflowActionParameters.ShowWhenRun) || NewValue(true))!;
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.IntentAppIdentifier) {
            content.push({
                title: 'Via',
                content: null,
                componentConstructor: () => this.IntentAppIdentifier!.componentConstructor(),
            });
        }

        content.push({
            title: 'Show When Run',
            content: null,
            componentConstructor: () => this.ShowWhenRun.componentConstructor(),
        });

        if (this.WFSendMessageActionRecipients) {
            content.push({
                title: 'Recipients',
                content: null,
                componentConstructor: () => this.WFSendMessageActionRecipients!.componentConstructor(),
            });
        }

        if (this.WFSendMessageContent) {
            content.push({
                title: 'Content',
                content: null,
                componentConstructor: () => this.WFSendMessageContent!.componentConstructor(),
            });
        }

        return content;
    }
}
