import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class MobilePhoneCallAction extends Action {
    constructor(object: any) {
        super(() => 'Call', object, () => ActionComponent, () => '☎️');
    }
}
