import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class AlertAction extends Action implements DefaultContentProviding {
    public WFAlertActionMessage?: Value;
    public WFAlertActionTitle?: Value;
    public WFAlertActionCancelButtonShown?: Value;

    constructor(object: any) {
        super(() => 'Show Alert', object, () => ActionComponent, () => '⚙️');
        this.WFAlertActionMessage = NewValue(object.WFWorkflowActionParameters.WFAlertActionMessage);
        this.WFAlertActionTitle = NewValue(object.WFWorkflowActionParameters.WFAlertActionTitle);
        this.WFAlertActionCancelButtonShown = NewValue(object.WFWorkflowActionParameters.WFAlertActionCancelButtonShown);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFAlertActionTitle) {
            content.push({
                title: 'Title',
                content: null,
                componentConstructor: () => this.WFAlertActionTitle!.componentConstructor(),
            });
        }

        if (this.WFAlertActionMessage) {
            content.push({
                title: 'Message',
                content: null,
                componentConstructor: () => this.WFAlertActionMessage!.componentConstructor(),
            });
        }

        if (this.WFAlertActionCancelButtonShown) {
            content.push({
                title: 'Show Cancel Button',
                content: null,
                componentConstructor: () => this.WFAlertActionCancelButtonShown!.componentConstructor(),
            });
        }

        return content;
    }
}
