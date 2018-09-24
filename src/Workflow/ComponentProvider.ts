import { VueConstructor } from 'vue';

export interface ComponentProvider {
    componentConstructor(): VueConstructor;
}
