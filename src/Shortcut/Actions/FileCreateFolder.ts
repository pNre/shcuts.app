import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class FileCreateFolderAction extends Action implements DefaultContentProviding {
    public WFFilePath?: Value;
    public WFFileStorageService: Value;

    constructor(object: any) {
        super(() => 'Create Folder', object, () => ActionComponent);
        this.WFFileStorageService = (NewValue(object.WFWorkflowActionParameters.WFFileStorageService) || NewValue('iCloud Drive'))!;
        this.WFFilePath = NewValue(object.WFWorkflowActionParameters.WFFilePath);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Service',
            content: null,
            componentConstructor: () => this.WFFileStorageService.componentConstructor(),
        }];

        if (this.WFFilePath) {
            content.push({
                title: 'Path',
                content: null,
                componentConstructor: () => this.WFFilePath!.componentConstructor(),
            });
        }

        return content;
    }
}
