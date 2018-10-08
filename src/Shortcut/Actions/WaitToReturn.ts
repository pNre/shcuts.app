import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class WaitToReturnAction extends Action {
    constructor(object: any) {
        super(() => 'Wait To Return', object, () => ActionComponent, () => '⚙️');
    }
}
