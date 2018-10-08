import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class DetectAddressAction extends Action {
    constructor(object: any) {
        super(() => 'Get Addresses from Input', object, () => ActionComponent);
    }
}
