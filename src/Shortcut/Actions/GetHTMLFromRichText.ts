import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';
import { DefaultContentProviding, DefaultContent } from '@/Shortcut/DefaultContentProviding';

export default class GetHTMLFromRichTextAction extends Action implements DefaultContentProviding {
    public WFMakeFullDocument: Value;

    constructor(object: any) {
        super(() => 'Make HTML from Rich Text', object, () => ActionComponent);
        this.WFMakeFullDocument = (NewValue(object.WFWorkflowActionParameters.WFMakeFullDocument) || NewValue(false))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Make Full Document',
            content: null,
            componentConstructor: () => this.WFMakeFullDocument.componentConstructor(),
        }];
    }
}
