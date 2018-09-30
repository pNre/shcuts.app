import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class DocumentPickerSaveAction extends Action implements DefaultContentProviding {
    public WFAskWhereToSave?: Value;
    public WFSaveFileOverwrite?: Value;
    public WFFileDestinationPath?: Value;
    public WFFileStorageService: Value;

    constructor(object: any) {
        super(() => 'Save File', object, () => ActionComponent);
        this.WFFileStorageService = (NewValue(object.WFWorkflowActionParameters.WFFileStorageService) || NewValue('iCloud Drive'))!;
        this.WFFileDestinationPath = NewValue(object.WFWorkflowActionParameters.WFFileDestinationPath);
        this.WFSaveFileOverwrite = NewValue(object.WFWorkflowActionParameters.WFSaveFileOverwrite);
        this.WFAskWhereToSave = NewValue(object.WFWorkflowActionParameters.WFAskWhereToSave);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Service',
            content: null,
            componentConstructor: () => this.WFFileStorageService.componentConstructor(),
        }];

        if (this.WFAskWhereToSave) {
            content.push({
                title: 'Ask Where to Save',
                content: null,
                componentConstructor: () => this.WFAskWhereToSave!.componentConstructor(),
            });
        }

        if (this.WFFileDestinationPath) {
            content.push({
                title: 'Destination Path',
                content: null,
                componentConstructor: () => this.WFFileDestinationPath!.componentConstructor(),
            });
        }

        if (this.WFSaveFileOverwrite) {
            content.push({
                title: 'Overwrite If File Exists',
                content: null,
                componentConstructor: () => this.WFSaveFileOverwrite!.componentConstructor(),
            });
        }

        return content;
    }
}
