import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class ContactsAction extends Action implements DefaultContentProviding {
    public WFContact?: Value;

    constructor(object: any) {
        super(() => 'Contacts', object, () => ActionComponent, () => '👥');
        this.WFContact = NewValue(object.WFWorkflowActionParameters.WFContact);
    }

    public defaultContent(): DefaultContent[] {
        if (!this.WFContact) {
            return [];
        }

        return [{
            title: 'Contacts',
            content: null,
            componentConstructor: () => this.WFContact!.componentConstructor(),
        }];
    }
}
