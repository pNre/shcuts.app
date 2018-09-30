import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class GetArticleAction extends Action {
    constructor(object: any) {
        super(() => 'Get Diffbot Article from Web Page', object, () => ActionComponent, () => '📰');
    }
}
