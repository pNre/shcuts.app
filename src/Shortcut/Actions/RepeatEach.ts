import { Action, ActionIndentationChange } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

enum RepeatEachFlowMode {
    Repeat = 0,
    EndRepeat = 2,
}

export default class RepeatEachAction extends Action implements DefaultContentProviding {
    public GroupingIdentifier: string;
    public WFControlFlowMode: RepeatEachFlowMode;

    constructor(object: any) {
        super(() => this.name(), object, () => ActionComponent, () => '⚙️');
        this.GroupingIdentifier = object.WFWorkflowActionParameters.GroupingIdentifier;
        this.WFControlFlowMode = object.WFWorkflowActionParameters.WFControlFlowMode;
    }

    public defaultContent(): DefaultContent[] {
        return [];
    }

    public get indentationChange(): ActionIndentationChange | null {
        switch (this.WFControlFlowMode) {
            case RepeatEachFlowMode.Repeat:
                return ActionIndentationChange.In;
            case RepeatEachFlowMode.EndRepeat:
                return ActionIndentationChange.Out;
        }
    }

    private name(): string {
        switch (this.WFControlFlowMode) {
            case RepeatEachFlowMode.Repeat:
                return 'Repeat with Each';
            case RepeatEachFlowMode.EndRepeat:
                return 'End Repeat';
        }

        return `Repeat <${this.WFControlFlowMode}>`;
    }
}
