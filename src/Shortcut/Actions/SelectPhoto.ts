import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class SelectPhotoAction extends Action implements DefaultContentProviding {
    public WFSelectMultiplePhotos?: Value;

    constructor(object: any) {
        super(() => 'Select Photos', object, () => ActionComponent, () => '🌄');
        this.WFSelectMultiplePhotos = NewValue(object.WFWorkflowActionParameters.WFSelectMultiplePhotos);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFSelectMultiplePhotos) {
            content.push({
                title: 'Select Multiple',
                content: null,
                componentConstructor: () => this.WFSelectMultiplePhotos!.componentConstructor(),
            });
        }

        return content;
    }
}
