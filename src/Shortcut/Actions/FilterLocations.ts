import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import FilterAction from '@/Shortcut/Actions/Filter';

export default class FilterLocationsAction extends FilterAction {
    constructor(object: any) {
        super(() => 'Filter Locations', object, () => ActionComponent, () => '⚙️');
    }
}
