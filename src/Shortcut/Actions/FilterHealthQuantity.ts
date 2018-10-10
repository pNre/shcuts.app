import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import FilterAction from '@/Shortcut/Actions/Filter';

export default class FilterHealthQuantityAction extends FilterAction {
    constructor(object: any) {
        super(() => 'Find Health Samples Where', object, () => ActionComponent, () => '🧡');
    }
}
