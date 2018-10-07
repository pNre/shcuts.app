import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class UserActivityOpenAction extends Action implements DefaultContentProviding {
    public AppBundleIdentifier?: Value;

    constructor(object: any) {
        super(() => 'Open', object, () => ActionComponent, () => '🔗');
        this.AppBundleIdentifier = NewValue(object.WFWorkflowActionParameters.AppBundleIdentifier);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.AppBundleIdentifier) {
            content.push({
                title: 'App',
                content: null,
                componentConstructor: () => this.AppBundleIdentifier!.componentConstructor(),
            });
        }

        return content;
    }
}
