import { Action, ActionIndentationChange } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

enum RepeatFlowMode {
    Repeat = 0,
    EndRepeat = 2,
}

export default class RepeatAction extends Action implements DefaultContentProviding {
    public GroupingIdentifier: string;
    public WFControlFlowMode: RepeatFlowMode;
    public WFRepeatCount?: Value;

    constructor(object: any) {
        super(() => this.name(), object, () => ActionComponent, () => '⚙️');
        this.GroupingIdentifier = object.WFWorkflowActionParameters.GroupingIdentifier;
        this.WFControlFlowMode = object.WFWorkflowActionParameters.WFControlFlowMode;
        this.WFRepeatCount = NewValue(object.WFWorkflowActionParameters.WFRepeatCount);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFRepeatCount) {
            content.push({
                title: 'Repeats',
                content: null,
                componentConstructor: () => this.WFRepeatCount!.componentConstructor(),
            });
        }

        return content;
    }

    public get indentationChange(): ActionIndentationChange | null {
        switch (this.WFControlFlowMode) {
            case RepeatFlowMode.Repeat:
                return ActionIndentationChange.In;
            case RepeatFlowMode.EndRepeat:
                return ActionIndentationChange.Out;
        }
    }

    private name(): string {
        switch (this.WFControlFlowMode) {
            case RepeatFlowMode.Repeat:
                return 'Repeat';
            case RepeatFlowMode.EndRepeat:
                return 'End Repeat';
        }

        return `Repeat <${this.WFControlFlowMode}>`;
    }
}
