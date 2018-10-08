import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class ImageResizeAction extends Action implements DefaultContentProviding {
    public WFImageResizeWidth?: Value;
    public WFImageResizeHeight?: Value;

    constructor(object: any) {
        super(() => 'Resize Image', object, () => ActionComponent, () => '🌄');
        this.WFImageResizeWidth = NewValue(object.WFWorkflowActionParameters.WFImageResizeWidth);
        this.WFImageResizeHeight = NewValue(object.WFWorkflowActionParameters.WFImageResizeHeight);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFImageResizeWidth) {
            content.push({
                title: 'Width',
                content: null,
                componentConstructor: () => this.WFImageResizeWidth!.componentConstructor(),
            });
        }

        if (this.WFImageResizeHeight) {
            content.push({
                title: 'Height',
                content: null,
                componentConstructor: () => this.WFImageResizeHeight!.componentConstructor(),
            });
        }

        return content;
    }
}
