import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class WhatsAppSendAction extends Action implements DefaultContentProviding {
    public WhatsAppContact?: Value;

    constructor(object: any) {
        super(() => 'Send Message via WhatsApp', object, () => ActionComponent, () => 'W');
        this.WhatsAppContact = NewValue(object.WFWorkflowActionParameters.WhatsAppContact);
    }

    public defaultContent(): DefaultContent[] {
        if (!this.WhatsAppContact) {
            return [];
        }

        return [{
            title: 'Recipient',
            content: null,
            componentConstructor: () => this.WhatsAppContact!.componentConstructor(),
        }];
    }
}
