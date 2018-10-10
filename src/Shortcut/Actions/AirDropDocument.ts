import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class AirDropDocumentAction extends Action {
    constructor(object: any) {
        super(() => 'AirDrop', object, () => ActionComponent);
    }
}
