import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { Shortcut } from '@/Shortcut/Shortcut';

Vue.use(Vuex);

interface Store {
    shortcuts: any[];
    shortcutDetails: {
        [key: string]: Shortcut,
    };
    isLoading: boolean;
}

export default new Vuex.Store<Store>({
    state: {
        shortcuts: [],
        shortcutDetails: {},
        isLoading: false,
    },
    getters: {
        isLoading(state): boolean {
            return state.isLoading;
        },
    },
    mutations: {
        updateShortcus(state, shortcuts) {
            state.shortcuts = shortcuts;
        },
        updateShortcutDetail(state, shortcut) {
            Vue.set(state.shortcutDetails, shortcut.id, shortcut);
        },
        setIsLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
    },
    actions: {
        async loadShortcuts(state) {
            state.commit('setIsLoading', true);
            try {
                const response = await axios.get('/shortcuts/');
                state.commit('updateShortcus', response.data);
            } catch (e) {
                console.log(e);
            }
            state.commit('setIsLoading', false);
        },
        async loadShortcutDetail(state, id) {
            state.commit('setIsLoading', true);
            try {
                const response = await axios.get('/shortcuts/s/' + id);
                const shortcut = Shortcut.fromSource(response.data);
                if (shortcut) {
                    state.commit('updateShortcutDetail', shortcut);
                }
            } catch (e) {
                console.log(e);
            }
            state.commit('setIsLoading', false);
        },
    },
});
