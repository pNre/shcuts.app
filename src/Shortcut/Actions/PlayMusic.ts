import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class PlayMusicAction extends Action implements DefaultContentProviding {
    public WFPlayMusicActionRepeat?: Value;
    public WFPlayMusicActionShuffle?: Value;

    constructor(object: any) {
        super(() => 'Play Music', object, () => ActionComponent, () => '🎶');
        this.WFPlayMusicActionRepeat = NewValue(object.WFWorkflowActionParameters.WFPlayMusicActionRepeat);
        this.WFPlayMusicActionShuffle = NewValue(object.WFWorkflowActionParameters.WFPlayMusicActionShuffle);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFPlayMusicActionShuffle) {
            content.push({
                title: 'Shuffle',
                content: null,
                componentConstructor: () => this.WFPlayMusicActionShuffle!.componentConstructor(),
            });
        }

        if (this.WFPlayMusicActionRepeat) {
            content.push({
                title: 'Repeat',
                content: null,
                componentConstructor: () => this.WFPlayMusicActionRepeat!.componentConstructor(),
            });
        }

        return content;
    }
}
