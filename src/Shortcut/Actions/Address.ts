import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class AddressAction extends Action {
    constructor(object: any) {
        super(() => 'Street Address', object, () => ActionComponent, () => '🗺');
    }
}
