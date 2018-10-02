import { Aggrandizement } from '@/Shortcut/SerializedValues/Aggrandizement';
import Vue, { VueConstructor } from 'vue';

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

    public get isEmpty(): boolean {
        return false;
    }

    public description(): string {
        switch (this.Type) {
            case AttachmentType.Variable:
                return this.VariableName ? this.VariableName! : '<Variable>';
            case AttachmentType.ActionOutput:
                return this.OutputName || this.Type;
            default:
                return this.Type;
        }
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                const children: any[] = [this.description()];
                const type = this.type();
                const aggrandizements = this.aggrandizements();

                if (type) {
                    children.push(' ');
                    children.push(createElement('span', { class: 'label' }, type));
                }

                if (aggrandizements.length > 0) {
                    for (const aggrandizement of aggrandizements) {
                        children.push(' ');
                        children.push(createElement('span', { class: 'label' }, aggrandizement));
                    }
                }

                return createElement('span', { class: 'label label-secondary' }, children);
            },
        });
    }

    private aggrandizements(): string[] {
        if (!this.Aggrandizements) {
            return [];
        }

        return this.Aggrandizements!
            .map((x) => x.description())
            .filter((x) => x && x.length > 0)
            .map((x) => x!);
    }

    private type(): string | null {
        switch (this.Type) {
            case AttachmentType.ActionOutput:
                return 'Action output';
            default:
                return null;
        }
    }
}
