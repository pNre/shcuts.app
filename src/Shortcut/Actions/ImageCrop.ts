import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class ImageCropAction extends Action implements DefaultContentProviding {
    public WFImageCropPosition?: Value;
    public WFImageCropWidth?: Value;
    public WFImageCropHeight?: Value;

    constructor(object: any) {
        super(() => 'Crop Image', object, () => ActionComponent, () => '🌄');
        this.WFImageCropPosition = NewValue(object.WFWorkflowActionParameters.WFImageCropPosition);
        this.WFImageCropWidth = NewValue(object.WFWorkflowActionParameters.WFImageCropWidth);
        this.WFImageCropHeight = NewValue(object.WFWorkflowActionParameters.WFImageCropHeight);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFImageCropPosition) {
            content.push({
                title: 'Position',
                content: null,
                componentConstructor: () => this.WFImageCropPosition!.componentConstructor(),
            });
        }

        if (this.WFImageCropWidth) {
            content.push({
                title: 'Width',
                content: null,
                componentConstructor: () => this.WFImageCropWidth!.componentConstructor(),
            });
        }

        if (this.WFImageCropHeight) {
            content.push({
                title: 'Height',
                content: null,
                componentConstructor: () => this.WFImageCropHeight!.componentConstructor(),
            });
        }

        return content;
    }
}
