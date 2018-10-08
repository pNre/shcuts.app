import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class AddMusicToUpNextAction extends Action implements DefaultContentProviding {
    public WFWhenToPlay?: Value;

    constructor(object: any) {
        super(() => 'Add to Up Next', object, () => ActionComponent, () => '🎶');
        this.WFWhenToPlay = NewValue(object.WFWorkflowActionParameters.WFWhenToPlay);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFWhenToPlay) {
            content.push({
                title: 'Play',
                content: null,
                componentConstructor: () => this.WFWhenToPlay!.componentConstructor(),
            });
        }

        return content;
    }
}
