import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class FilterMusicAction extends Action implements DefaultContentProviding {
    public WFContentItemFilter?: Value;
    public WFContentItemSortOrder?: string;
    public WFContentItemSortProperty?: string;
    public WFContentItemLimitEnabled?: Value;
    public WFContentItemLimitNumber?: Value;

    constructor(object: any) {
        super(() => 'Find Reminders Where', object, () => ActionComponent, () => '🎶️');
        this.WFContentItemFilter = NewValue(object.WFWorkflowActionParameters.WFContentItemFilter);
        this.WFContentItemLimitEnabled = NewValue(object.WFWorkflowActionParameters.WFContentItemLimitEnabled);
        this.WFContentItemLimitNumber = NewValue(object.WFWorkflowActionParameters.WFContentItemLimitNumber);
        this.WFContentItemSortOrder = object.WFWorkflowActionParameters.WFContentItemSortOrder;
        this.WFContentItemSortProperty = object.WFWorkflowActionParameters.WFContentItemSortProperty;
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFContentItemFilter && !this.WFContentItemFilter.isEmpty) {
            content.push({
                title: 'Filter',
                content: null,
                componentConstructor: () => this.WFContentItemFilter!.componentConstructor(),
            });
        }

        if (this.WFContentItemSortProperty) {
            content.push({
                title: 'Sort By',
                content: this.WFContentItemSortProperty,
                componentConstructor: null,
            });
        }

        if (this.WFContentItemSortProperty) {
            content.push({
                title: 'Order',
                content: this.WFContentItemSortProperty,
                componentConstructor: null,
            });
        }

        if (this.WFContentItemLimitEnabled) {
            content.push({
                title: 'Limit',
                content: null,
                componentConstructor: () => this.WFContentItemLimitEnabled!.componentConstructor(),
            });
        }

        if (this.WFContentItemLimitNumber) {
            content.push({
                title: 'Count',
                content: null,
                componentConstructor: () => this.WFContentItemLimitNumber!.componentConstructor(),
            });
        }

        return content;
    }
}
