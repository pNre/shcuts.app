import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class Base64EncodeAction extends Action implements DefaultContentProviding {
    public WFEncodeMode: Value;
    public WFBase64LineBreakMode?: Value;

    constructor(object: any) {
        super(() => 'Base64 Encode', object, () => ActionComponent, () => '⚙️');
        this.WFEncodeMode = (NewValue(object.WFWorkflowActionParameters.WFEncodeMode) || NewValue('Encode'))!;
        this.WFBase64LineBreakMode = NewValue(object.WFWorkflowActionParameters.WFBase64LineBreakMode);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Mode',
            content: null,
            componentConstructor: () => this.WFEncodeMode.componentConstructor(),
        }];

        if (this.WFBase64LineBreakMode) {
            content.push({
                title: 'Line Breaks',
                content: null,
                componentConstructor: () => this.WFBase64LineBreakMode!.componentConstructor(),
            });
        }

        return content;
    }
}
