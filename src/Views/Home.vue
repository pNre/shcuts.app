<template>
    <div class="columns">
        <div class="column col-8 col-md-12 col-mx-auto">
            <div class="container with-padding">
                <h2>Preview Shortcut</h2>
                <form @submit.prevent="submit">
                    <div class="columns col-oneline mt-2 mb-2">
                        <div class="column col-6 col-md-6 mt-2">
                            <input type="text" class="form-input input-lg" placeholder="Shortcut iCloud URL" v-model="urlString">
                        </div>
                        <div class="column col-2 col-md-4 mt-2">
                            <button class="btn btn-primary btn-lg input-group-btn" :style="{'padding-left': '1rem', 'padding-right': '1rem'}" :disabled="this.url == null">Preview</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="container with-padding">
                <h2>Latest Shortcuts</h2>
                <div class="columns" v-for="(row, index) in contentRows" :key="'content-row-' + index">
                    <template v-for="shortcut in row">
                        <MiniShortcutComponent :shortcut="shortcut" :key="shortcut.id" />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator';
import MiniShortcutComponent from '@/Components/MiniShortcutComponent.vue';
import Path from 'path';

@Component({
    components: {
        MiniShortcutComponent,
    },
})
export default class Home extends Vue {
    private urlString: string = '';

    get url(): URL | null {
        try {
            return new URL(this.urlString);
        } catch (_) {
            return null;
        }
    }

    get contentRows(): any[][] {
        const shortcuts = this.$store.state.shortcuts;

        if (!shortcuts) {
            return [];
        }

        const rows = [];

        while (shortcuts.length > 0) {
            const slice = shortcuts.splice(0, 4);
            rows.push(slice);
        }

        return rows;
    }

    private created() {
        this.$store.dispatch('loadShortcuts');
    }

    private submit() {
        const url = this.url;
        if (!url) {
            return false;
        }

        if (!url.hostname.endsWith('icloud.com')) {
            return false;
        }

        const pathComponents = url.pathname.split('/');
        const id = pathComponents[pathComponents.length - 1];
        this.$router.push({ name: 'shortcut', params: { id } });

        return true;
    }
}
</script>
