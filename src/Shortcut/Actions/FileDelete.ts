import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class FileDeleteAction extends Action implements DefaultContentProviding {
    public WFDeleteFileConfirmDeletion: Value;

    constructor(object: any) {
        super(() => 'Delete Files', object, () => ActionComponent);
        this.WFDeleteFileConfirmDeletion = (NewValue(object.WFWorkflowActionParameters.WFDeleteFileConfirmDeletion) || NewValue(true))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Confirm Before Deleting',
            content: null,
            componentConstructor: () => this.WFDeleteFileConfirmDeletion.componentConstructor(),
        }];
    }
}
