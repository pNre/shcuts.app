import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class DetectImagesAction extends Action {
    constructor(object: any) {
        super(() => 'Get Images from Input', object, () => ActionComponent);
    }
}
