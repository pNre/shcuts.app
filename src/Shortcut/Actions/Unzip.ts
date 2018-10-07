import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class UnzipAction extends Action {
    constructor(object: any) {
        super(() => 'Extract Archive', object, () => ActionComponent, () => '🗄');
    }
}
