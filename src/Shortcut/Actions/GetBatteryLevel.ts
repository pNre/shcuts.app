import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class GetBatteryLevelAction extends Action {
    constructor(object: any) {
        super(() => 'Get Battery Level', object, () => ActionComponent, () => '🔋');
    }
}
