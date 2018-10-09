import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class TextMatchGetGroupAction extends Action implements DefaultContentProviding {
    public WFGetGroupType?: Value;
    public WFGroupIndex?: Value;

    constructor(object: any) {
        super(() => 'Get Group from Matched Text', object, () => ActionComponent);

        if (!object.WFWorkflowActionParameters.WFGetGroupType &&
            !object.WFWorkflowActionParameters.WFGroupIndex) {
            this.WFGetGroupType = NewValue('Group At Index');
            this.WFGroupIndex = NewValue(1);
        } else {
            this.WFGetGroupType = NewValue(object.WFWorkflowActionParameters.WFGetGroupType);
            this.WFGroupIndex = NewValue(object.WFWorkflowActionParameters.WFGroupIndex);
        }
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFGetGroupType) {
            content.push({
                title: 'Get',
                content: null,
                componentConstructor: () => this.WFGetGroupType!.componentConstructor(),
            });
        }

        if (this.WFGroupIndex) {
            content.push({
                title: 'Group Index',
                content: null,
                componentConstructor: () => this.WFGroupIndex!.componentConstructor(),
            });
        }

        return content;
    }
}
