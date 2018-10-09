import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue, StringValue } from '@/Shortcut/Value';

export default class DNDSetAction extends Action implements DefaultContentProviding {
    public Enabled: Value;
    public AssertionType?: Value;
    public Time?: Value;
    public Event?: Value;

    constructor(object: any) {
        super(() => 'Set Do Not Disturb', object, () => ActionComponent);
        this.Enabled = (NewValue(object.WFWorkflowActionParameters.Enabled) || NewValue(true))!;
        this.AssertionType = NewValue(object.WFWorkflowActionParameters.AssertionType);
        this.Time = NewValue(object.WFWorkflowActionParameters.Time);
        this.Event = NewValue(object.WFWorkflowActionParameters.Event);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Do Not Disturb',
            content: null,
            componentConstructor: () => this.Enabled.componentConstructor(),
        }];

        if (this.AssertionType) {
            content.push({
                title: 'Until',
                content: null,
                componentConstructor: () => this.AssertionType!.componentConstructor(),
            });
        }

        if (this.isAssertionType('Time') && this.Time) {
            content.push({
                title: 'Time',
                content: null,
                componentConstructor: () => this.Time!.componentConstructor(),
            });
        }

        if (this.isAssertionType('Event Ends') && this.Event) {
            content.push({
                title: 'Event',
                content: null,
                componentConstructor: () => this.Event!.componentConstructor(),
            });
        }

        return content;
    }

    private isAssertionType(type: string): boolean {
        return typeof this.AssertionType !== 'undefined'
            && this.AssertionType.hasOwnProperty('string')
            && (this.AssertionType as StringValue).string === type;
    }
}
