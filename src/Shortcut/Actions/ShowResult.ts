import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class ShowResultAction extends Action implements DefaultContentProviding {
    public Text?: Value;

    constructor(object: any) {
        super(() => 'Show Result', object, () => ActionComponent);
        this.Text = NewValue(object.WFWorkflowActionParameters.Text);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.Text) {
            content.push({
                title: 'Show',
                content: null,
                componentConstructor: () => this.Text!.componentConstructor(),
            });
        }

        return content;
    }
}
