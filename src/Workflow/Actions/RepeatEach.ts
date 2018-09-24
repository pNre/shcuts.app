import uuidv4 from 'uuid/v4';
import { Action, ActionComponentDescriptor, ActionIndentationChange } from '@/Workflow/Action';
import ConditionalActionComponent from '@/Components/Actions/ConditionalComponent.vue';

enum RepeatEachFlowMode {
    Repeat = 0,
    EndRepeat = 2,
}

export default class RepeatEachAction implements Action {
    public component: ActionComponentDescriptor;
    public GroupingIdentifier: string;
    public WFControlFlowMode: RepeatEachFlowMode;

    constructor(object: any) {
        this.GroupingIdentifier = object.WFWorkflowActionParameters.GroupingIdentifier;
        this.WFControlFlowMode = object.WFWorkflowActionParameters.WFControlFlowMode;

        this.component = {
            key: uuidv4(),
            name: this.name(),
            componentConstructor: () => ConditionalActionComponent,
        };
    }

    public get hasBody(): boolean {
        return false;
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
