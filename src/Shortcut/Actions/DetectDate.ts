import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class DetectDateAction extends Action {
    constructor(object: any) {
        super(() => 'Get Dates from Input', object, () => ActionComponent, () => '📅');
    }
}
