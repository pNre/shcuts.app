import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class ImageCombineAction extends Action implements DefaultContentProviding {
    public WFImageCombineMode?: Value;
    public WFImageCombineDirection?: Value;
    public WFImageCombineSpacing?: Value;

    constructor(object: any) {
        super(() => 'Combine Images', object, () => ActionComponent, () => '🌄');
        this.WFImageCombineMode = NewValue(object.WFWorkflowActionParameters.WFImageCombineMode) || NewValue('Side-by-Side');
        this.WFImageCombineDirection = NewValue(object.WFWorkflowActionParameters.WFImageCombineDirection);
        this.WFImageCombineSpacing = NewValue(object.WFWorkflowActionParameters.WFImageCombineSpacing) || NewValue(0);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFImageCombineMode) {
            content.push({
                title: 'Mode',
                content: null,
                componentConstructor: () => this.WFImageCombineMode!.componentConstructor(),
            });
        }

        if (this.WFImageCombineDirection) {
            content.push({
                title: 'Direction',
                content: null,
                componentConstructor: () => this.WFImageCombineDirection!.componentConstructor(),
            });
        }

        if (this.WFImageCombineSpacing) {
            content.push({
                title: 'Spacing',
                content: null,
                componentConstructor: () => this.WFImageCombineSpacing!.componentConstructor(),
            });
        }

        return content;
    }
}
