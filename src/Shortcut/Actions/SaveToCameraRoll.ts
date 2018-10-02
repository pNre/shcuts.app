import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class SaveToCameraRollAction extends Action implements DefaultContentProviding {
    public WFCameraRollSelectedGroup?: Value;

    constructor(object: any) {
        super(() => 'Save to Photo Album', object, () => ActionComponent, () => '🌄');
        this.WFCameraRollSelectedGroup = NewValue(object.WFWorkflowActionParameters.WFCameraRollSelectedGroup);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFCameraRollSelectedGroup) {
            content.push({
                title: 'Album',
                content: null,
                componentConstructor: () => this.WFCameraRollSelectedGroup!.componentConstructor(),
            });
        }

        return content;
    }
}
