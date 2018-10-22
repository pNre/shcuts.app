import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '../Value';

export default class OpenInAction extends Action implements DefaultContentProviding {
    public WFAppIdentifier?: string;
    public WFOpenInAskWhenRun: Value;

    constructor(object: any) {
        super(() => 'Open In...', object, () => ActionComponent);
        this.WFAppIdentifier = object.WFWorkflowActionParameters.WFAppIdentifier;
        this.WFOpenInAskWhenRun = (NewValue(object.WFWorkflowActionParameters.WFOpenInAskWhenRun) || NewValue(true))!;
    }

    public defaultContent(): DefaultContent[] {
        const components: DefaultContent[] = [{
            title: 'Show Open In Menu',
            content: null,
            componentConstructor: () => this.WFOpenInAskWhenRun.componentConstructor(),
        }];

        if (this.WFAppIdentifier) {
            components.push({
                title: 'App',
                content: this.WFAppIdentifier,
                componentConstructor: null,
            });
        }

        return components;
    }
}
