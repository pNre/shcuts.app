import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class DateAction extends Action implements DefaultContentProviding {
    public WFDateActionMode: Value;
    public WFDateActionDate?: Value;

    constructor(object: any) {
        super(() => 'Date', object, () => ActionComponent, () => '📅');
        this.WFDateActionMode = (NewValue(object.WFWorkflowActionParameters.WFDateActionMode) || NewValue('Current Date'))!;
        this.WFDateActionDate = NewValue(object.WFWorkflowActionParameters.WFDateActionDate);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Use',
            content: null,
            componentConstructor: () => this.WFDateActionMode.componentConstructor(),
        }];

        if (this.WFDateActionDate) {
            content.push({
                title: 'Date',
                content: null,
                componentConstructor: () => this.WFDateActionDate!.componentConstructor(),
            });
        }

        return content;
    }
}
