import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class MakeZipAction extends Action implements DefaultContentProviding {
    public WFArchiveFormat: Value;
    public WFZIPName?: Value;

    constructor(object: any) {
        super(() => 'Make Archive', object, () => ActionComponent, () => '🗄');
        this.WFArchiveFormat = (NewValue(object.WFWorkflowActionParameters.WFArchiveFormat) || NewValue('zip'))!;
        this.WFZIPName = NewValue(object.WFWorkflowActionParameters.WFZIPName);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFZIPName) {
            content.push({
                title: 'Archive Name',
                content: null,
                componentConstructor: () => this.WFZIPName!.componentConstructor(),
            });
        }

        content.push({
            title: 'Format',
            content: null,
            componentConstructor: () => this.WFArchiveFormat!.componentConstructor(),
        });

        return content;
    }
}
