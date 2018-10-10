import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class AddNewEventAction extends Action implements DefaultContentProviding {
    public WFCalendarItemTitle?: Value;
    public WFCalendarItemLocation?: Value;
    public WFCalendarItemCalendar?: Value;
    public WFCalendarItemNotes?: Value;
    public WFCalendarItemAllDay?: Value;
    public WFCalendarItemDates?: Value;
    public WFAlertTime?: Value;
    public WFCalendarItemStartDate?: Value;
    public WFCalendarItemEndDate?: Value;

    constructor(object: any) {
        super(() => 'Add New Event', object, () => ActionComponent, () => '📅');
        this.WFCalendarItemTitle = NewValue(object.WFWorkflowActionParameters.WFCalendarItemTitle);
        this.WFCalendarItemNotes = NewValue(object.WFWorkflowActionParameters.WFCalendarItemNotes);
        this.WFCalendarItemAllDay = NewValue(object.WFWorkflowActionParameters.WFCalendarItemAllDay);
        this.WFCalendarItemLocation = NewValue(object.WFWorkflowActionParameters.WFCalendarItemLocation);
        this.WFCalendarItemDates = NewValue(object.WFWorkflowActionParameters.WFCalendarItemDates);
        this.WFAlertTime = NewValue(object.WFWorkflowActionParameters.WFAlertTime);
        this.WFCalendarItemEndDate = NewValue(object.WFWorkflowActionParameters.WFCalendarItemEndDate);
        this.WFCalendarItemStartDate = NewValue(object.WFWorkflowActionParameters.WFCalendarItemStartDate);
        this.WFCalendarItemCalendar = NewValue(object.WFWorkflowActionParameters.WFCalendarItemCalendar);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFCalendarItemTitle) {
            content.push({
                title: 'Title',
                content: null,
                componentConstructor: () => this.WFCalendarItemTitle!.componentConstructor(),
            });
        }

        if (this.WFCalendarItemLocation) {
            content.push({
                title: 'Location',
                content: null,
                componentConstructor: () => this.WFCalendarItemLocation!.componentConstructor(),
            });
        }

        if (this.WFCalendarItemCalendar) {
            content.push({
                title: 'Calendar',
                content: null,
                componentConstructor: () => this.WFCalendarItemCalendar!.componentConstructor(),
            });
        }

        if (this.WFCalendarItemStartDate) {
            content.push({
                title: 'Start Date',
                content: null,
                componentConstructor: () => this.WFCalendarItemStartDate!.componentConstructor(),
            });
        }

        if (this.WFCalendarItemEndDate) {
            content.push({
                title: 'End Date',
                content: null,
                componentConstructor: () => this.WFCalendarItemEndDate!.componentConstructor(),
            });
        }

        if (this.WFCalendarItemAllDay) {
            content.push({
                title: 'All Day',
                content: null,
                componentConstructor: () => this.WFCalendarItemAllDay!.componentConstructor(),
            });
        }

        if (this.WFAlertTime) {
            content.push({
                title: 'Alert',
                content: null,
                componentConstructor: () => this.WFAlertTime!.componentConstructor(),
            });
        }

        if (this.WFCalendarItemNotes) {
            content.push({
                title: 'Notes',
                content: null,
                componentConstructor: () => this.WFCalendarItemNotes!.componentConstructor(),
            });
        }

        return content;
    }
}
