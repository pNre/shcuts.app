import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class RSSAction extends Action implements DefaultContentProviding {
    public WFRSSFeedURL?: Value;
    public WFRSSItemQuantity?: Value;

    constructor(object: any) {
        super(() => 'Get Items from RSS Feed', object, () => ActionComponent);
        this.WFRSSItemQuantity = NewValue(object.WFWorkflowActionParameters.WFRSSItemQuantity);
        this.WFRSSFeedURL = NewValue(object.WFWorkflowActionParameters.WFRSSFeedURL);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFRSSFeedURL) {
            content.push({
                title: 'URL',
                content: null,
                componentConstructor: () => this.WFRSSFeedURL!.componentConstructor(),
            });
        }

        if (this.WFRSSItemQuantity) {
            content.push({
                title: 'Items',
                content: null,
                componentConstructor: () => this.WFRSSItemQuantity!.componentConstructor(),
            });
        }

        return content;
    }
}
