import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class DocumentPickerOpenAction extends Action implements DefaultContentProviding {
    public WFShowFilePicker?: Value;
    public WFFileErrorIfNotFound?: Value;
    public WFGetFilePath?: Value;
    public WFFileStorageService: Value;

    constructor(object: any) {
        super(() => 'Get File', object, () => ActionComponent);
        this.WFFileStorageService = (NewValue(object.WFWorkflowActionParameters.WFFileStorageService) || NewValue('iCloud Drive'))!;
        this.WFGetFilePath = NewValue(object.WFWorkflowActionParameters.WFGetFilePath);
        this.WFFileErrorIfNotFound = NewValue(object.WFWorkflowActionParameters.WFFileErrorIfNotFound);
        this.WFShowFilePicker = NewValue(object.WFWorkflowActionParameters.WFShowFilePicker);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Service',
            content: null,
            componentConstructor: () => this.WFFileStorageService.componentConstructor(),
        }];

        if (this.WFShowFilePicker) {
            content.push({
                title: 'Show Document Picker',
                content: null,
                componentConstructor: () => this.WFShowFilePicker!.componentConstructor(),
            });
        }

        if (this.WFGetFilePath) {
            content.push({
                title: 'File Path',
                content: null,
                componentConstructor: () => this.WFGetFilePath!.componentConstructor(),
            });
        }

        if (this.WFFileErrorIfNotFound) {
            content.push({
                title: 'Error If Not Found',
                content: null,
                componentConstructor: () => this.WFFileErrorIfNotFound!.componentConstructor(),
            });
        }

        return content;
    }
}
