import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class GetCurrentLocationAction extends Action {
    constructor(object: any) {
        super(() => 'Get Current Location', object, () => ActionComponent);
    }
}
