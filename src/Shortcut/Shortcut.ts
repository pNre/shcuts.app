import { parse } from 'plist';
import { Actions, UnknownAction } from '@/Shortcut/Actions';
import { ActionIndentationChange } from '@/Shortcut/Action';

export class Shortcut {

    public static fromSource(data: any): Shortcut | null {
        let plist;

        try {
            plist = parse(data.plist);
        } catch (_) {
            return null;
        }

        if (!plist) {
            return null;
        }

        return new Shortcut(data, plist);
    }

    public id: string;
    public name: string;
    public actions: [any];
    public WFWorkflowClientRelease: string;
    public WFWorkflowClientVersion: string;
    public WFWorkflowInputContentItemClasses: string[];
    public WFWorkflowTypes: string[];
    public WFWorkflowIcon: any;

    public get WFWorkflowIconStartColor(): string {
        const color = this.WFWorkflowIcon.WFWorkflowIconStartColor.toString(16) as string;
        return color.slice(0, -2);
    }

    private constructor(data: any, plist: any) {
        this.id = data.id;
        this.name = data.name;
        this.WFWorkflowClientRelease = plist.WFWorkflowClientRelease;
        this.WFWorkflowClientVersion = plist.WFWorkflowClientVersion;
        this.WFWorkflowInputContentItemClasses = plist.WFWorkflowInputContentItemClasses;
        this.WFWorkflowTypes = plist.WFWorkflowTypes;
        this.WFWorkflowIcon = plist.WFWorkflowIcon;
        this.actions = plist.WFWorkflowActions.map((action: any) => {
            const actionType = Actions[action.WFWorkflowActionIdentifier as string];
            if (actionType) {
                return new actionType(action);
            } else {
                return new UnknownAction(action);
            }
        });

        let indentationLevel = 0;
        for (const action of this.actions) {
            if ('indentationChange' in action) {
                switch (action.indentationChange) {
                    case null:
                        action.indentationLevel = indentationLevel - 1;
                        break;
                    case ActionIndentationChange.In:
                        action.indentationLevel = indentationLevel;
                        indentationLevel += 1;
                        break;
                    case ActionIndentationChange.Out:
                        indentationLevel -= 1;
                        action.indentationLevel = indentationLevel;
                        break;
                }
            } else {
                action.indentationLevel = indentationLevel;
            }
        }
    }

}
