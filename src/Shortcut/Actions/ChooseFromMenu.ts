import { Action, ActionIndentationChange, ActionName } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

enum ChooseFromMenuControlFlowMode {
    Menu = 0,
    Item = 1,
    EndMenu = 2,
}

export default class ChooseFromMenuAction extends Action implements DefaultContentProviding {
    public GroupingIdentifier: string;
    public WFControlFlowMode: ChooseFromMenuControlFlowMode;
    public WFMenuPrompt?: Value;
    public WFMenuItemTitle?: Value;

    constructor(object: any) {
        super(() => this.name(), object, () => ActionComponent, () => '⚙️');
        this.GroupingIdentifier = object.WFWorkflowActionParameters.GroupingIdentifier;
        this.WFControlFlowMode = object.WFWorkflowActionParameters.WFControlFlowMode;
        this.WFMenuPrompt = NewValue(object.WFWorkflowActionParameters.WFMenuPrompt);
        this.WFMenuItemTitle = NewValue(object.WFWorkflowActionParameters.WFMenuItemTitle);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFControlFlowMode !== ChooseFromMenuControlFlowMode.Menu || !this.WFMenuPrompt) {
            return content;
        }

        if (this.WFMenuPrompt) {
            content.push({
                title: 'Prompt',
                content: null,
                componentConstructor: () => this.WFMenuPrompt!.componentConstructor(),
            });
        }

        return content;
    }

    public get indentationChange(): ActionIndentationChange | null {
        switch (this.WFControlFlowMode) {
            case ChooseFromMenuControlFlowMode.Menu:
                return ActionIndentationChange.In;
            case ChooseFromMenuControlFlowMode.Item:
                return null;
            case ChooseFromMenuControlFlowMode.EndMenu:
                return ActionIndentationChange.Out;
        }
    }

    private name(): ActionName {
        if (this.WFControlFlowMode === ChooseFromMenuControlFlowMode.Menu) {
            return 'Choose from Menu';
        } else if (this.WFMenuItemTitle) {
            return this.WFMenuItemTitle!.componentConstructor();
        } else if (this.WFControlFlowMode === ChooseFromMenuControlFlowMode.EndMenu) {
            return 'End Menu';
        }

        return `Choose <${this.WFControlFlowMode}>`;
    }
}
