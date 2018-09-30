import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class NotificationAction extends Action implements DefaultContentProviding {
    public WFNotificationActionBody?: Value;
    public WFNotificationActionTitle?: Value;
    public WFNotificationActionSound?: Value;

    constructor(object: any) {
        super(() => 'Show Notification', object, () => ActionComponent, () => '📣️');
        this.WFNotificationActionBody = NewValue(object.WFWorkflowActionParameters.WFNotificationActionBody);
        this.WFNotificationActionTitle = NewValue(object.WFWorkflowActionParameters.WFNotificationActionTitle);
        this.WFNotificationActionSound = NewValue(object.WFWorkflowActionParameters.WFNotificationActionSound);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFNotificationActionTitle) {
            content.push({
                title: 'Title',
                content: null,
                componentConstructor: () => this.WFNotificationActionTitle!.componentConstructor(),
            });
        }

        if (this.WFNotificationActionBody) {
            content.push({
                title: 'Body',
                content: null,
                componentConstructor: () => this.WFNotificationActionBody!.componentConstructor(),
            });
        }

        if (this.WFNotificationActionSound) {
            content.push({
                title: 'Play Sound',
                content: null,
                componentConstructor: () => this.WFNotificationActionSound!.componentConstructor(),
            });
        }

        return content;
    }
}
