import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class RemoveRemindersAction extends Action {
    constructor(object: any) {
        super(() => 'Remove Reminders', object, () => ActionComponent);
    }
}
