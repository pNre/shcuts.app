import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class TextCombineAction extends Action implements DefaultContentProviding {
    public WFTextSeparator: Value;
    public WFTextCustomSeparator?: Value;

    constructor(object: any) {
        super(() => 'Combine Text', object, () => ActionComponent);
        this.WFTextSeparator = (NewValue(object.WFWorkflowActionParameters.WFTextSeparator) || NewValue('Spaces'))!;
        this.WFTextCustomSeparator = NewValue(object.WFWorkflowActionParameters.WFTextCustomSeparator);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Separator',
            content: null,
            componentConstructor: () => this.WFTextSeparator.componentConstructor(),
        }];

        if (this.WFTextCustomSeparator) {
            content.push({
                title: 'Custom',
                content: null,
                componentConstructor: () => this.WFTextCustomSeparator!.componentConstructor(),
            });
        }

        return content;
    }
}
