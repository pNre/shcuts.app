import { Action } from '@/Shortcut/Action';
import AddNewReminderActionComponent from '@/Components/Actions/AddNewReminderActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class AddNewReminderAction extends Action {
    public WFCalendarItemTitle?: Value;
    public WFCalendarItemAlert?: Value;
    public WFAlertTrigger?: Value;
    public WFAlertCustomTime?: Value;
    public WFCalendarItemNotes?: Value;

    constructor(source: any) {
        super(() => 'Add New Reminder', source, () => AddNewReminderActionComponent);
        this.WFCalendarItemTitle = NewValue(source.WFWorkflowActionParameters.WFCalendarItemTitle);
        this.WFCalendarItemAlert = NewValue(source.WFWorkflowActionParameters.WFCalendarItemAlert);
        this.WFAlertTrigger = NewValue(source.WFWorkflowActionParameters.WFAlertTrigger);
        this.WFAlertCustomTime = NewValue(source.WFWorkflowActionParameters.WFAlertCustomTime);
        this.WFCalendarItemNotes = NewValue(source.WFWorkflowActionParameters.WFCalendarItemNotes);
    }
}
