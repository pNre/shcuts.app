import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class InstapaperGetAction extends Action implements DefaultContentProviding {
    public WFInstapaperFolder?: Value;
    public WFBookmarkCount?: Value;

    constructor(object: any) {
        super(() => 'Get Instapaper Bookmarks', object, () => ActionComponent);
        this.WFInstapaperFolder = NewValue(object.WFWorkflowActionParameters.WFInstapaperFolder);
        this.WFBookmarkCount = NewValue(object.WFWorkflowActionParameters.WFBookmarkCount);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFInstapaperFolder) {
            content.push({
                title: 'Folder',
                content: null,
                componentConstructor: () => this.WFInstapaperFolder!.componentConstructor(),
            });
        }

        if (this.WFBookmarkCount) {
            content.push({
                title: 'Count',
                content: null,
                componentConstructor: () => this.WFBookmarkCount!.componentConstructor(),
            });
        }

        return content;
    }
}
