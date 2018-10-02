import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class PreviewDocumentAction extends Action {
    constructor(object: any) {
        super(() => 'Quick Look', object, () => ActionComponent);
    }
}
