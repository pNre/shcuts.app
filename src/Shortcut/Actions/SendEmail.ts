import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class SendEmailAction extends Action implements DefaultContentProviding {
    public WFSendEmailActionShowComposeSheet: Value;
    public WFSendEmailActionFrom?: Value;
    public WFSendEmailActionToRecipients?: Value;
    public WFSendEmailActionCcRecipients?: Value;
    public WFSendEmailActionBccRecipients?: Value;
    public WFSendEmailActionSubject?: Value;

    constructor(object: any) {
        super(() => 'Send Email', object, () => ActionComponent, () => '✉️');
        this.WFSendEmailActionShowComposeSheet = (NewValue(object.WFWorkflowActionParameters.WFSendEmailActionShowComposeSheet) || NewValue(false))!;
        this.WFSendEmailActionFrom = NewValue(object.WFWorkflowActionParameters.WFSendEmailActionFrom);
        this.WFSendEmailActionToRecipients = NewValue(object.WFWorkflowActionParameters.WFSendEmailActionToRecipients);
        this.WFSendEmailActionCcRecipients = NewValue(object.WFWorkflowActionParameters.WFSendEmailActionCcRecipients);
        this.WFSendEmailActionBccRecipients = NewValue(object.WFWorkflowActionParameters.WFSendEmailActionBccRecipients);
        this.WFSendEmailActionSubject = NewValue(object.WFWorkflowActionParameters.WFSendEmailActionSubject);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Show Compose Sheet',
            content: null,
            componentConstructor: () => this.WFSendEmailActionShowComposeSheet!.componentConstructor(),
        }];

        if (this.WFSendEmailActionFrom) {
            content.push({
                title: 'From',
                content: null,
                componentConstructor: () => this.WFSendEmailActionFrom!.componentConstructor(),
            });
        }

        if (this.WFSendEmailActionToRecipients) {
            content.push({
                title: 'To',
                content: null,
                componentConstructor: () => this.WFSendEmailActionToRecipients!.componentConstructor(),
            });
        }

        if (this.WFSendEmailActionCcRecipients) {
            content.push({
                title: 'Cc',
                content: null,
                componentConstructor: () => this.WFSendEmailActionCcRecipients!.componentConstructor(),
            });
        }

        if (this.WFSendEmailActionBccRecipients) {
            content.push({
                title: 'Bcc',
                content: null,
                componentConstructor: () => this.WFSendEmailActionBccRecipients!.componentConstructor(),
            });
        }

        if (this.WFSendEmailActionSubject) {
            content.push({
                title: 'Subject',
                content: null,
                componentConstructor: () => this.WFSendEmailActionSubject!.componentConstructor(),
            });
        }

        return content;
    }
}
