import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class OpenAppAction extends Action implements DefaultContentProviding {
    public WFAppIdentifier: string;

    constructor(object: any) {
        super(() => 'Open App', object, () => ActionComponent);
        this.WFAppIdentifier = object.WFWorkflowActionParameters.WFAppIdentifier;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Operation',
            content: this.WFAppIdentifier,
            componentConstructor: null,
        }];
    }
}
