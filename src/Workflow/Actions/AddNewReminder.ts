import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import AddNewReminderActionComponent from '@/Components/Actions/AddNewReminderActionComponent.vue';
import { Value, NewValue } from '@/Workflow/Value';

export default class AddNewReminderAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Add New Reminder',
        componentConstructor: () => AddNewReminderActionComponent,
    };

    public WFCalendarItemTitle: string;
    public WFCalendarItemAlert: boolean;
    public WFAlertTrigger: string;
    public WFAlertCustomTime: Value;
    public WFCalendarItemNotes?: Value;

    constructor(source: any) {
        this.WFCalendarItemTitle = source.WFWorkflowActionParameters.WFCalendarItemTitle;
        this.WFCalendarItemAlert = source.WFWorkflowActionParameters.WFCalendarItemAlert;
        this.WFAlertTrigger = source.WFWorkflowActionParameters.WFAlertTrigger;
        this.WFAlertCustomTime = NewValue(source.WFWorkflowActionParameters.WFAlertCustomTime);
        if (source.WFWorkflowActionParameters.WFCalendarItemNotes) {
            this.WFCalendarItemNotes = NewValue(source.WFWorkflowActionParameters.WFCalendarItemNotes);
        }
    }
}
