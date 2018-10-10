import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import FilterAction from '@/Shortcut/Actions/Filter';

export default class FilterRemindersAction extends FilterAction {
    constructor(object: any) {
        super(() => 'Find Reminders Where', object, () => ActionComponent, () => '⚙️');
    }
}
