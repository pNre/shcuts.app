import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class URLEncodeAction extends Action implements DefaultContentProviding {
    public WFEncodeMode: Value;

    constructor(object: any) {
        super(() => 'URL Encode', object, () => ActionComponent, () => '🔗');
        this.WFEncodeMode = (NewValue(object.WFWorkflowActionParameters.WFEncodeMode) || NewValue('Encode'))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Mode',
            content: null,
            componentConstructor: () => this.WFEncodeMode.componentConstructor(),
        }];
    }
}
