import Vue, { VueConstructor } from 'vue';

export interface DefaultContent {
    title: string | null;
    content: string | null;
    componentConstructor: (() => VueConstructor<Vue>) | null;
}

export interface DefaultContentProviding {
    defaultContent(): DefaultContent[];
}
