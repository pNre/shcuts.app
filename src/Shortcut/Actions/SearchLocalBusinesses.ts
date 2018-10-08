import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class SearchLocalBusinessesAction extends Action implements DefaultContentProviding {
    public WFSearchQuery?: Value;
    public WFSearchRadius: Value;

    constructor(object: any) {
        super(() => 'Search Local Businesses', object, () => ActionComponent, () => '🗺');
        this.WFSearchQuery = NewValue(object.WFWorkflowActionParameters.WFSearchQuery);
        this.WFSearchRadius = (NewValue(object.WFWorkflowActionParameters.WFSearchRadius) || NewValue(1.5))!;
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFSearchQuery) {
            content.push({
                title: 'Search',
                content: null,
                componentConstructor: () => this.WFSearchQuery!.componentConstructor(),
            });
        }

        if (this.WFSearchRadius) {
            content.push({
                title: 'Radius (km)',
                content: null,
                componentConstructor: () => this.WFSearchRadius!.componentConstructor(),
            });
        }

        return content;
    }
}
