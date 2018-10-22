import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class OverlayImageOnImageAction extends Action implements DefaultContentProviding {
    public WFShouldShowImageEditor?: Value;
    public WFImage?: Value;
    public WFImagePosition?: Value;
    public WFImageWidth?: Value;
    public WFImageHeight?: Value;
    public WFRotation?: Value;
    public WFOverlayImageOpacity?: Value;

    constructor(object: any) {
        super(() => 'Overlay Image', object, () => ActionComponent, () => '🌄');
        this.WFShouldShowImageEditor = NewValue(object.WFWorkflowActionParameters.WFShouldShowImageEditor);
        this.WFImage = NewValue(object.WFWorkflowActionParameters.WFImage);
        this.WFImagePosition = NewValue(object.WFWorkflowActionParameters.WFImagePosition);
        this.WFImageWidth = NewValue(object.WFWorkflowActionParameters.WFImageWidth);
        this.WFImageHeight = NewValue(object.WFWorkflowActionParameters.WFImageHeight);
        this.WFRotation = NewValue(object.WFWorkflowActionParameters.WFRotation);
        this.WFOverlayImageOpacity = NewValue(object.WFWorkflowActionParameters.WFOverlayImageOpacity);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFImage) {
            content.push({
                title: 'Image',
                content: null,
                componentConstructor: () => this.WFImage!.componentConstructor(),
            });
        }

        if (this.WFShouldShowImageEditor) {
            content.push({
                title: 'Show Image Editor',
                content: null,
                componentConstructor: () => this.WFShouldShowImageEditor!.componentConstructor(),
            });
        }

        if (this.WFImagePosition) {
            content.push({
                title: 'Position',
                content: null,
                componentConstructor: () => this.WFImagePosition!.componentConstructor(),
            });
        }

        if (this.WFImageWidth) {
            content.push({
                title: 'Width',
                content: null,
                componentConstructor: () => this.WFImageWidth!.componentConstructor(),
            });
        }

        if (this.WFImageHeight) {
            content.push({
                title: 'Height',
                content: null,
                componentConstructor: () => this.WFImageHeight!.componentConstructor(),
            });
        }

        if (this.WFRotation) {
            content.push({
                title: 'Rotation',
                content: null,
                componentConstructor: () => this.WFRotation!.componentConstructor(),
            });
        }

        if (this.WFOverlayImageOpacity) {
            content.push({
                title: 'Opacity',
                content: null,
                componentConstructor: () => this.WFOverlayImageOpacity!.componentConstructor(),
            });
        }

        return content;
    }
}
