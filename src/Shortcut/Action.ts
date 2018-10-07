import uuidv4 from 'uuid/v4';
import { ComponentProvider } from '@/Shortcut/ComponentProvider';
import Vue, { VueConstructor } from 'vue';
import { Attachment, AttachmentType } from '@/Shortcut/SerializedValues/Attachment';

export type ActionName = string | VueConstructor<Vue>;
export type ActionIcon = string | null;

export enum ActionIndentationChange {
    In,
    Out,
}

class ActionComponentDescriptor implements ComponentProvider {
    public key: string;
    public componentConstructor: () => VueConstructor<Vue>;
    private nameProducer: () => ActionName;
    private iconProducer: () => ActionIcon;

    constructor(name: () => ActionName, icon: () => ActionIcon, componentConstructor: () => VueConstructor<Vue>) {
        this.key = uuidv4();
        this.componentConstructor = componentConstructor;
        this.nameProducer = name;
        this.iconProducer = icon;
    }

    public get name(): ActionName {
        return this.nameProducer();
    }

    public get icon(): ActionIcon {
        return this.iconProducer();
    }
}

export class Action {
    public component: ActionComponentDescriptor;
    public UUID?: string;

    constructor(name: () => ActionName,
                object: any,
                componentConstructor: () => VueConstructor<Vue>,
                icon: () => ActionIcon = () => '🔹') {
        this.component = new ActionComponentDescriptor(name, icon, componentConstructor);
        this.UUID = object.WFWorkflowActionParameters.UUID;
    }
}
