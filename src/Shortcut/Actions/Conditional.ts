import { Action, ActionIndentationChange } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

enum ConditionControlFlowMode {
    If = 0,
    Else = 1,
    EndIf = 2,
}

export default class ConditionalAction extends Action implements DefaultContentProviding {
    public GroupingIdentifier: string;
    public WFCondition?: string;
    public WFControlFlowMode: ConditionControlFlowMode;
    public WFConditionalActionString?: Value;
    public WFNumberValue?: Value;

    constructor(object: any) {
        super(() => this.name(), object, () => ActionComponent, () => '⚙️');
        this.GroupingIdentifier = object.WFWorkflowActionParameters.GroupingIdentifier;
        this.WFCondition = object.WFWorkflowActionParameters.WFCondition;
        this.WFControlFlowMode = object.WFWorkflowActionParameters.WFControlFlowMode;
        this.WFConditionalActionString = NewValue(object.WFWorkflowActionParameters.WFConditionalActionString);
        this.WFNumberValue = NewValue(object.WFWorkflowActionParameters.WFNumberValue);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFControlFlowMode !== ConditionControlFlowMode.If) {
            return content;
        }

        if (this.WFCondition) {
            content.push({
                title: 'Input',
                content: this.WFCondition,
                componentConstructor: null,
            });
        }

        if (this.WFConditionalActionString) {
            content.push({
                title: 'Value',
                content: null,
                componentConstructor: () => this.WFConditionalActionString!.componentConstructor(),
            });
        }

        if (this.WFNumberValue) {
            content.push({
                title: 'Number',
                content: null,
                componentConstructor: () => this.WFNumberValue!.componentConstructor(),
            });
        }

        return content;
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
