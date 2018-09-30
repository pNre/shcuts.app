import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import SearchiTunesActionComponent from '@/Components/Actions/SearchiTunesComponent.vue';
import { NewValue, Value } from '@/Shortcut/Value';

export default class SearchiTunesAction extends Action implements DefaultContentProviding {
    public WFSearchTerm?: Value;
    public WFItemLimit?: Value;
    public WFMediaType?: Value;
    public WFAttribute?: Value;
    public WFCountry?: Value;
    public WFEntity?: Value;

    constructor(object: any) {
        super(() => 'Search iTunes', object, () => SearchiTunesActionComponent);
        this.WFItemLimit = NewValue(object.WFWorkflowActionParameters.WFItemLimit);
        this.WFMediaType = NewValue(object.WFWorkflowActionParameters.WFMediaType);
        this.WFSearchTerm = NewValue(object.WFWorkflowActionParameters.WFSearchTerm);
        this.WFAttribute = NewValue(object.WFWorkflowActionParameters.WFAttribute);
        this.WFCountry = NewValue(object.WFWorkflowActionParameters.WFCountry);
        this.WFEntity = NewValue(object.WFWorkflowActionParameters.WFEntity);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFSearchTerm) {
            content.push({
                title: 'Search',
                content: null,
                componentConstructor: () => this.WFSearchTerm!.componentConstructor(),
            });
        }

        if (this.WFMediaType) {
            content.push({
                title: 'Category',
                content: null,
                componentConstructor: () => this.WFMediaType!.componentConstructor(),
            });
        }

        if (this.WFAttribute) {
            content.push({
                title: 'Search By',
                content: null,
                componentConstructor: () => this.WFAttribute!.componentConstructor(),
            });
        }

        if (this.WFEntity) {
            content.push({
                title: 'Results',
                content: null,
                componentConstructor: () => this.WFEntity!.componentConstructor(),
            });
        }

        if (this.WFCountry) {
            content.push({
                title: 'Country',
                content: null,
                componentConstructor: () => this.WFCountry!.componentConstructor(),
            });
        }

        if (this.WFItemLimit) {
            content.push({
                title: 'Items',
                content: null,
                componentConstructor: () => this.WFItemLimit!.componentConstructor(),
            });
        }

        return content;
    }
}
