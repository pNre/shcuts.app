import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { NewValue, Value } from '@/Shortcut/Value';

export default class GetTimeBetweenDatesAction extends Action implements DefaultContentProviding {
    public WFTimeUntilReferenceDate?: Value;
    public WFTimeUntilUnit?: Value;
    public WFTimeUntilCustomDate?: Value;

    constructor(object: any) {
        super(() => 'Get Time Between Dates', object, () => ActionComponent);
        this.WFTimeUntilReferenceDate = NewValue(object.WFWorkflowActionParameters.WFTimeUntilReferenceDate);
        this.WFTimeUntilUnit = NewValue(object.WFWorkflowActionParameters.WFTimeUntilUnit);
        this.WFTimeUntilCustomDate = NewValue(object.WFWorkflowActionParameters.WFTimeUntilCustomDate);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFTimeUntilReferenceDate) {
            content.push({
                title: 'Get Time From',
                content: null,
                componentConstructor: () => this.WFTimeUntilReferenceDate!.componentConstructor(),
            });
        }

        if (this.WFTimeUntilCustomDate) {
            content.push({
                title: 'Other Date',
                content: null,
                componentConstructor: () => this.WFTimeUntilCustomDate!.componentConstructor(),
            });
        }

        if (this.WFTimeUntilUnit) {
            content.push({
                title: 'In',
                content: null,
                componentConstructor: () => this.WFTimeUntilUnit!.componentConstructor(),
            });
        }

        return content;
    }
}
