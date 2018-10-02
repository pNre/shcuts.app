import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class FileAppendAction extends Action implements DefaultContentProviding {
    public WFAppendFileWriteMode: Value;
    public WFAppendOnNewLine: Value;
    public WFFilePath?: Value;
    public WFFileStorageService: Value;

    constructor(object: any) {
        super(() => 'Append to File', object, () => ActionComponent);
        this.WFFileStorageService = (NewValue(object.WFWorkflowActionParameters.WFFileStorageService) || NewValue('iCloud Drive'))!;
        this.WFFilePath = NewValue(object.WFWorkflowActionParameters.WFFilePath);
        this.WFAppendOnNewLine = (NewValue(object.WFWorkflowActionParameters.WFAppendOnNewLine) || NewValue(true))!;
        this.WFAppendFileWriteMode = (NewValue(object.WFWorkflowActionParameters.WFAppendFileWriteMode) || NewValue('Append'))!;
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Service',
            content: null,
            componentConstructor: () => this.WFFileStorageService.componentConstructor(),
        }];

        if (this.WFFilePath) {
            content.push({
                title: 'File Path',
                content: null,
                componentConstructor: () => this.WFFilePath!.componentConstructor(),
            });
        }

        content.push({
            title: 'Mode',
            content: null,
            componentConstructor: () => this.WFAppendFileWriteMode.componentConstructor(),
        });

        content.push({
            title: 'Make New Line',
            content: null,
            componentConstructor: () => this.WFAppendOnNewLine.componentConstructor(),
        });

        return content;
    }
}
