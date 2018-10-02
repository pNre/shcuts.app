import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class ChooseFromListAction extends Action implements DefaultContentProviding {
    public WFChooseFromListActionPrompt?: Value;
    public WFChooseFromListActionSelectMultiple?: Value;
    public WFChooseFromListActionSelectAll?: Value;

    constructor(object: any) {
        super(() => 'Choose from List', object, () => ActionComponent, () => '⚙️');
        this.WFChooseFromListActionPrompt = NewValue(object.WFWorkflowActionParameters.WFChooseFromListActionPrompt);
        this.WFChooseFromListActionSelectMultiple = NewValue(object.WFWorkflowActionParameters.WFChooseFromListActionSelectMultiple);
        this.WFChooseFromListActionSelectAll = NewValue(object.WFWorkflowActionParameters.WFChooseFromListActionSelectAll);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFChooseFromListActionPrompt) {
            content.push({
                title: 'Prompt',
                content: null,
                componentConstructor: () => this.WFChooseFromListActionPrompt!.componentConstructor(),
            });
        }

        if (this.WFChooseFromListActionSelectMultiple) {
            content.push({
                title: 'Select Multiple',
                content: null,
                componentConstructor: () => this.WFChooseFromListActionSelectMultiple!.componentConstructor(),
            });
        }

        if (this.WFChooseFromListActionSelectAll) {
            content.push({
                title: 'Select All Initially',
                content: null,
                componentConstructor: () => this.WFChooseFromListActionSelectAll!.componentConstructor(),
            });
        }

        return content;
    }
}
