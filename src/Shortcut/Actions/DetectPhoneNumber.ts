import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class DetectPhoneNumberAction extends Action {
    constructor(object: any) {
        super(() => 'Get Phone Numbers from Input', object, () => ActionComponent, () => '📞');
    }
}
