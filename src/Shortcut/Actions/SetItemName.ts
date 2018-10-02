import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class SetItemNameAction extends Action implements DefaultContentProviding {
    public WFName?: Value;
    public WFDontIncludeFileExtension?: Value;

    constructor(object: any) {
        super(() => 'Set Name', object, () => ActionComponent);
        this.WFDontIncludeFileExtension = NewValue(object.WFWorkflowActionParameters.WFDontIncludeFileExtension);
        this.WFName = NewValue(object.WFWorkflowActionParameters.WFName);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFName) {
            content.push({
                title: 'Name',
                content: null,
                componentConstructor: () => this.WFName!.componentConstructor(),
            });
        }

        if (this.WFDontIncludeFileExtension) {
            content.push({
                title: 'Don\'t Include File Extension',
                content: null,
                componentConstructor: () => this.WFDontIncludeFileExtension!.componentConstructor(),
            });
        }

        return content;
    }
}
