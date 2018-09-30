import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class PayAction extends Action implements DefaultContentProviding {
    public IntentAppIdentifier?: string;
    public WFVenmoActionAmount?: Value;
    public WFVenmoActionNote?: Value;
    public WFVenmoActionRecipients?: Value;
    public WFVenmoActionAppSwitch: Value;

    constructor(object: any) {
        super(() => 'Send Payment', object, () => ActionComponent, () => '💶');
        this.IntentAppIdentifier = object.WFWorkflowActionParameters.IntentAppIdentifier;
        this.WFVenmoActionAmount = NewValue(object.WFWorkflowActionParameters.WFVenmoActionAmount);
        this.WFVenmoActionNote = NewValue(object.WFWorkflowActionParameters.WFVenmoActionNote);
        this.WFVenmoActionRecipients = NewValue(object.WFWorkflowActionParameters.WFVenmoActionRecipients);
        this.WFVenmoActionAppSwitch = (NewValue(object.WFWorkflowActionParameters.WFVenmoActionAppSwitch) || NewValue(false))!;
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.IntentAppIdentifier) {
            content.push({
                title: 'App',
                content: this.IntentAppIdentifier,
                componentConstructor: null,
            });
        }

        if (this.WFVenmoActionRecipients) {
            content.push({
                title: 'Recipient',
                content: null,
                componentConstructor: () => this.WFVenmoActionRecipients!.componentConstructor(),
            });
        }

        if (this.WFVenmoActionAmount) {
            content.push({
                title: 'Amount',
                content: null,
                componentConstructor: () => this.WFVenmoActionAmount!.componentConstructor(),
            });
        }

        content.push({
            title: 'Open in App',
            content: null,
            componentConstructor: () => this.WFVenmoActionAppSwitch.componentConstructor(),
        });

        if (this.WFVenmoActionNote) {
            content.push({
                title: 'Recipient',
                content: null,
                componentConstructor: () => this.WFVenmoActionNote!.componentConstructor(),
            });
        }

        return content;
    }
}
