import { Aggrandizement } from '@/Workflow/Aggrandizement';

export enum AttachmentType {
    Variable = 'Variable',
    Clipboard = 'Clipboard',
    Ask = 'Ask',
    CurrentDate = 'CurrentDate',
    ExtensionInput = 'ExtensionInput',
    ActionOutput = 'ActionOutput',
}

export class Attachment {
    public Type: AttachmentType;
    public VariableName?: string;
    public Aggrandizements?: [Aggrandizement];
    public OutputName?: string;
    public OutputUUID?: string;

    constructor(source: any) {
        this.Type = source.Type;
        this.VariableName = source.VariableName;
        this.OutputName = source.OutputName;
        this.OutputUUID = source.OutputUUID;
        if (source.Aggrandizements) {
            this.Aggrandizements = source.Aggrandizements.map((x: any) => new Aggrandizement(x));
        }
    }

    public description(): string {
        switch (this.Type) {
            case AttachmentType.Variable:
                let properties = '';
                if (this.Aggrandizements) {
                    properties += ' [as] ' + this.Aggrandizements
                        .map((x) => x.description())
                        .filter((x) => x.length > 0)
                        .join(', ');
                }
                return (this.VariableName ? this.VariableName! : '<Variable>') + properties;
            case AttachmentType.ActionOutput:
                return this.OutputName || this.Type;
            default:
                return this.Type;
        }
    }
}
