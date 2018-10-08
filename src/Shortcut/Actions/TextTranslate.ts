import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class TextTranslateAction extends Action implements DefaultContentProviding {
    public WFSelectedFromLanguage: Value;
    public WFSelectedLanguage?: Value;

    constructor(object: any) {
        super(() => 'Translate Text', object, () => ActionComponent);
        this.WFSelectedFromLanguage = (NewValue(object.WFWorkflowActionParameters.WFSelectedFromLanguage) || NewValue('Detect Language'))!;
        this.WFSelectedLanguage = NewValue(object.WFWorkflowActionParameters.WFSelectedLanguage);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'From',
            content: null,
            componentConstructor: () => this.WFSelectedFromLanguage.componentConstructor(),
        }];

        if (this.WFSelectedLanguage) {
            content.push({
                title: 'To',
                content: null,
                componentConstructor: () => this.WFSelectedLanguage!.componentConstructor(),
            });
        }

        return content;
    }
}
