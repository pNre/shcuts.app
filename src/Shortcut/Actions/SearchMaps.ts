import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class SearchMapsAction extends Action implements DefaultContentProviding {
    public WFSearchMapsActionApp?: Value;

    constructor(object: any) {
        super(() => 'Show in Maps', object, () => ActionComponent, () => '🗺');
        this.WFSearchMapsActionApp = NewValue(object.WFWorkflowActionParameters.WFSearchMapsActionApp);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFSearchMapsActionApp) {
            content.push({
                title: 'Maps App',
                content: null,
                componentConstructor: () => this.WFSearchMapsActionApp!.componentConstructor(),
            });
        }

        return content;
    }
}
