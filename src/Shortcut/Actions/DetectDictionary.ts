import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class DetectDictionaryAction extends Action {
    constructor(object: any) {
        super(() => 'Get Dictionary from Input', object, () => ActionComponent);
    }
}
