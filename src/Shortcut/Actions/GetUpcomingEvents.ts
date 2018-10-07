import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { NewValue, Value } from '@/Shortcut/Value';

export default class GetUpcomingEventsAction extends Action implements DefaultContentProviding {
    public WFGetUpcomingItemCalendar?: Value;
    public WFGetUpcomingItemCount?: Value;
    public WFDateSpecifier?: Value;
    public WFSpecifiedDate?: Value;

    constructor(object: any) {
        super(() => 'Get Upcoming Events', object, () => ActionComponent);
        this.WFGetUpcomingItemCalendar = NewValue(object.WFWorkflowActionParameters.WFGetUpcomingItemCalendar);
        this.WFGetUpcomingItemCount = NewValue(object.WFWorkflowActionParameters.WFGetUpcomingItemCount);
        this.WFDateSpecifier = NewValue(object.WFWorkflowActionParameters.WFDateSpecifier);
        this.WFSpecifiedDate = NewValue(object.WFWorkflowActionParameters.WFSpecifiedDate);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFGetUpcomingItemCalendar) {
            const c = this.WFGetUpcomingItemCalendar.isEmpty ? null : () => this.WFGetUpcomingItemCalendar!.componentConstructor();
            const cn = this.WFGetUpcomingItemCalendar.isEmpty ? 'All Calendars' : null;
            content.push({
                title: 'Calendar',
                content: cn,
                componentConstructor: c,
            });
        }

        if (this.WFGetUpcomingItemCount) {
            content.push({
                title: 'Events',
                content: null,
                componentConstructor: () => this.WFGetUpcomingItemCount!.componentConstructor(),
            });
        }

        if (this.WFDateSpecifier) {
            content.push({
                title: 'Day',
                content: null,
                componentConstructor: () => this.WFDateSpecifier!.componentConstructor(),
            });
        }

        if (this.WFSpecifiedDate) {
            content.push({
                title: 'Specified Day',
                content: null,
                componentConstructor: () => this.WFSpecifiedDate!.componentConstructor(),
            });
        }

        return content;
    }
}
