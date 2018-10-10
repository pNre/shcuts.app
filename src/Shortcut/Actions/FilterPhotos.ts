import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import FilterAction from '@/Shortcut/Actions/Filter';

export default class FilterPhotosAction extends FilterAction {
    constructor(object: any) {
        super(() => 'Find Photos', object, () => ActionComponent, () => '🌄');
    }
}
