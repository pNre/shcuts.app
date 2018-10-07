import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class GetPlaylistAction extends Action implements DefaultContentProviding {
    public WFPlaylistName?: Value;

    constructor(object: any) {
        super(() => 'Get Playlist', object, () => ActionComponent, () => '🎶');
        this.WFPlaylistName = NewValue(object.WFWorkflowActionParameters.WFPlaylistName);
    }

    public defaultContent(): DefaultContent[] {
        if (!this.WFPlaylistName) {
            return [];
        }

        return [{
            title: 'Playlist',
            content: null,
            componentConstructor: () => this.WFPlaylistName!.componentConstructor(),
        }];
    }
}
