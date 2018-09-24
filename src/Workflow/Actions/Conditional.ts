import uuidv4 from 'uuid/v4';
import { Action, ActionComponentDescriptor, ActionIndentationChange } from '@/Workflow/Action';
import ConditionalActionComponent from '@/Components/Actions/ConditionalComponent.vue';
import { Value, NewValue } from '@/Workflow/Value';

enum ConditionControlFlowMode {
    If = 0,
    Else = 1,
    EndIf = 2,
}

export default class ConditionalAction implements Action {
    public component: ActionComponentDescriptor;
    public GroupingIdentifier: string;
    public WFCondition?: string;
    public WFControlFlowMode: ConditionControlFlowMode;
    public WFConditionalActionString?: Value;

    constructor(object: any) {
        this.GroupingIdentifier = object.WFWorkflowActionParameters.GroupingIdentifier;
        this.WFCondition = object.WFWorkflowActionParameters.WFCondition;
        this.WFControlFlowMode = object.WFWorkflowActionParameters.WFControlFlowMode;
        if (object.WFWorkflowActionParameters.WFConditionalActionString) {
            this.WFConditionalActionString = NewValue(object.WFWorkflowActionParameters.WFConditionalActionString);
        }

        this.component = {
            key: uuidv4(),
            name: this.name(),
            componentConstructor: () => ConditionalActionComponent,
        };
    }

    public get hasBody(): boolean {
        return this.WFControlFlowMode === ConditionControlFlowMode.If;
    }

    public get indentationChange(): ActionIndentationChange | null {
        switch (this.WFControlFlowMode) {
            case ConditionControlFlowMode.If:
                return ActionIndentationChange.In;
            case ConditionControlFlowMode.Else:
                return null;
            case ConditionControlFlowMode.EndIf:
                return ActionIndentationChange.Out;
        }
    }

    private name(): string {
        switch (this.WFControlFlowMode) {
            case ConditionControlFlowMode.If:
                return 'If';
            case ConditionControlFlowMode.Else:
                return 'Otherwise';
            case ConditionControlFlowMode.EndIf:
                return 'End If';
        }

        return `Conditional <${this.WFControlFlowMode}>`;
    }
}
