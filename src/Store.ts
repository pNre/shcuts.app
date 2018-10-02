import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { Shortcut } from '@/Shortcut/Shortcut';

Vue.use(Vuex);

interface RootState {
    shortcuts: any[];
    shortcutDetails: { [key: string]: Shortcut };
    isLoading: boolean;
    hasMoreContent: boolean;
}

export default new Vuex.Store<RootState>({
    state: {
        shortcuts: [],
        shortcutDetails: {},
        isLoading: false,
        hasMoreContent: true,
    },
    getters: {
        shortcuts(state): any[] {
            return state.shortcuts;
        },
        nextOffset(state): number {
            return state.shortcuts.length;
        },
        isLoading(state): boolean {
            return state.isLoading;
        },
        hasMoreContent(state): boolean {
            return state.hasMoreContent;
        },
    },
    mutations: {
        updateShortcus(state, shortcuts) {
            state.shortcuts = state.shortcuts.concat(shortcuts);
            state.hasMoreContent = shortcuts.length > 0;
        },
        setShortcuts(state, shortcuts) {
            state.shortcuts = shortcuts;
            state.hasMoreContent = shortcuts.length > 0;
        },
        updateShortcutDetail(state, shortcut) {
            Vue.set(state.shortcutDetails, shortcut.id, shortcut);
        },
        setIsLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
    },
    actions: {
        async loadShortcuts(context, { reset }) {
            context.commit('setIsLoading', true);

            try {
                const response = await axios.get('/shortcuts/?o=' + (reset ? 0 : context.getters.nextOffset));
                if (Array.isArray(response.data)) {
                    context.commit(reset ? 'setShortcuts' : 'updateShortcus', response.data);
                }
            } catch (e) {
                console.log(e);
            }

            context.commit('setIsLoading', false);
        },
        async loadShortcutDetail(context, id) {
            context.commit('setIsLoading', true);
            try {
                const response = await axios.get('/shortcuts/s/' + id);
                const shortcut = Shortcut.fromSource(response.data);
                if (shortcut) {
                    context.commit('updateShortcutDetail', shortcut);
                }
            } catch (e) {
                console.log(e);
            }
            context.commit('setIsLoading', false);
        },
    },
    strict: process.env.NODE_ENV !== 'production',
});
