import { ComponentProvider } from '@/Workflow/ComponentProvider';

export interface ActionComponentDescriptor extends ComponentProvider {
    key: string;
    name: string;
}

export interface Action {
    component: ActionComponentDescriptor;
}

export enum ActionIndentationChange {
    In,
    Out,
}
