import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class URLAction extends Action implements DefaultContentProviding {
    public WFURLActionURL?: Value;

    constructor(object: any) {
        super(() => 'URL', object, () => ActionComponent);
        this.WFURLActionURL = NewValue(object.WFWorkflowActionParameters.WFURLActionURL);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFURLActionURL) {
            content.push({
                title: 'URL',
                content: null,
                componentConstructor: () => this.WFURLActionURL!.componentConstructor(),
            });
        }

        return content;
    }
}
