import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class RunWorkflowAction extends Action implements DefaultContentProviding {
    public WFShowWorkflow: Value;
    public WFWorkflowName?: Value;

    constructor(object: any) {
        super(() => 'Run Shortcut', object, () => ActionComponent);
        this.WFShowWorkflow = (NewValue(object.WFWorkflowActionParameters.WFShowWorkflow) || NewValue(true))!;
        this.WFWorkflowName = NewValue(object.WFWorkflowActionParameters.WFWorkflowName);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFWorkflowName) {
            content.push({
                title: 'Shortcut',
                content: null,
                componentConstructor: () => this.WFWorkflowName!.componentConstructor(),
            });
        }

        content.push({
            title: 'Show While Running',
            content: null,
            componentConstructor: () => this.WFShowWorkflow.componentConstructor(),
        });

        return content;
    }
}
