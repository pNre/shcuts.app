import { parse } from 'plist';
import { Actions, UnknownAction } from '@/Workflow/Actions';
import { ActionIndentationChange } from '@/Workflow/Action';

export class Workflow {

    public static fromSource(source: string): Workflow | null {
        let plist;

        try {
            plist = parse(source);
        } catch (x) {
            return null;
        }

        if (!plist) {
            return null;
        }

        return new Workflow(plist as any);
    }

    public actions: [any];
    public clientRelease: string;
    public clientVersion: string;

    private constructor(plist: any) {
        this.clientRelease = plist.WFWorkflowClientRelease;
        this.clientVersion = plist.WFWorkflowClientVersion;
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
