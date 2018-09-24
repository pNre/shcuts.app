import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import DateActionComponent from '@/Components/Actions/DateActionComponent.vue';

export default class DateAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Date',
        componentConstructor: () => DateActionComponent,
    };
}
