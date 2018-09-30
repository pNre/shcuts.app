import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class SpeakTextAction extends Action implements DefaultContentProviding {
    public WFSpeakTextLanguage: Value;
    public WFSpeakTextWait: Value;
    public WFSpeakTextRate?: Value;
    public WFSpeakTextPitch?: Value;

    constructor(object: any) {
        super(() => 'Speak Text', object, () => ActionComponent);
        this.WFSpeakTextLanguage = (NewValue(object.WFWorkflowActionParameters.WFSpeakTextLanguage) || NewValue('Default'))!;
        this.WFSpeakTextWait = (NewValue(object.WFWorkflowActionParameters.WFSpeakTextWait) || NewValue(true))!;
        this.WFSpeakTextRate = NewValue(object.WFWorkflowActionParameters.WFSpeakTextRate);
        this.WFSpeakTextPitch = NewValue(object.WFWorkflowActionParameters.WFSpeakTextPitch);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Wait Until Finished',
            content: null,
            componentConstructor: () => this.WFSpeakTextWait.componentConstructor(),
        }, {
            title: 'Language',
            content: null,
            componentConstructor: () => this.WFSpeakTextLanguage.componentConstructor(),
        }];

        if (this.WFSpeakTextRate) {
            content.push({
                title: 'Rate',
                content: null,
                componentConstructor: () => this.WFSpeakTextRate!.componentConstructor(),
            });
        }

        if (this.WFSpeakTextPitch) {
            content.push({
                title: 'Pitch',
                content: null,
                componentConstructor: () => this.WFSpeakTextPitch!.componentConstructor(),
            });
        }

        return content;
    }
}
