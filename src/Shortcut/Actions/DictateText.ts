import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class DictateTextAction extends Action implements DefaultContentProviding {
    public WFSpeechLanguage?: Value;
    public WFDictateTextStopListening?: Value;

    constructor(object: any) {
        super(() => 'Dictate Text', object, () => ActionComponent, () => '📢');
        this.WFSpeechLanguage = NewValue(object.WFWorkflowActionParameters.WFSpeechLanguage);
        this.WFDictateTextStopListening = NewValue(object.WFWorkflowActionParameters.WFDictateTextStopListening);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFSpeechLanguage) {
            content.push({
                title: 'Language',
                content: null,
                componentConstructor: () => this.WFSpeechLanguage!.componentConstructor(),
            });
        }

        if (this.WFDictateTextStopListening) {
            content.push({
                title: 'Stop Listening',
                content: null,
                componentConstructor: () => this.WFDictateTextStopListening!.componentConstructor(),
            });
        }

        return content;
    }
}
