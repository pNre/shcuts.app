import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class PhoneNumberAction extends Action implements DefaultContentProviding {
    public WFPhoneNumber?: Value;

    constructor(object: any) {
        super(() => 'Phone Number', object, () => ActionComponent, () => '📱');
        this.WFPhoneNumber = NewValue(object.WFWorkflowActionParameters.WFPhoneNumber);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFPhoneNumber) {
            content.push({
                title: null,
                content: null,
                componentConstructor: () => this.WFPhoneNumber!.componentConstructor(),
            });
        }

        return content;
    }
}
