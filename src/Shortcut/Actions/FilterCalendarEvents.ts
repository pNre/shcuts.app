import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import FilterAction from '@/Shortcut/Actions/Filter';

export default class FilterCalendarEventsAction extends FilterAction {
    constructor(object: any) {
        super(() => 'Find Calendar Events Where', object, () => ActionComponent, () => '📅');
    }
}
