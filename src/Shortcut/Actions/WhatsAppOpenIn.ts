import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class WhatsAppOpenInAction extends Action {
    constructor(object: any) {
        super(() => 'Send Photo via WhatsApp', object, () => ActionComponent, () => 'W');
    }
}
