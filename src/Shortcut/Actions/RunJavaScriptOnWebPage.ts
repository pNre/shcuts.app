import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import RunJavaScriptOnWebPageComponent from '@/Components/Actions/RunJavaScriptOnWebPageComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class RunJavaScriptOnWebPageAction extends Action implements DefaultContentProviding {
    public WFJavaScript?: Value;

    constructor(object: any) {
        super(() => 'Run JavaScript on Web Page', object, () => RunJavaScriptOnWebPageComponent);
        this.WFJavaScript = NewValue(object.WFWorkflowActionParameters.WFJavaScript);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFJavaScript) {
            content.push({
                title: 'Script',
                content: null,
                componentConstructor: () => this.WFJavaScript!.componentConstructor(),
            });
        }

        return content;
    }
}
