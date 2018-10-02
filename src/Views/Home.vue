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
                            <button class="btn btn-primary btn-lg input-group-btn" :style="{'padding-left': '1rem', 'padding-right': '1rem'}" :disabled="!urlIsValid">Preview</button>
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
            <div class="container with-padding">
                <button v-if="hasMoreContent" @click="loadMore" class="btn btn-sm">Load more</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator';
import MiniShortcutComponent from '@/Components/MiniShortcutComponent.vue';
import Path from 'path';
import { Action, Getter } from 'vuex-class';

@Component({
    components: {
        MiniShortcutComponent,
    },
})
export default class Home extends Vue {
    private urlString: string = '';

    @Getter private shortcuts!: any[];
    @Getter private hasMoreContent!: boolean;
    @Action private loadShortcuts!: (config: any) => void;

    get url(): URL | null {
        try {
            return new URL(this.urlString);
        } catch (_) {
            return null;
        }
    }

    get urlIsValid(): boolean {
        const url = this.url;
        if (!url) {
            return false;
        }

        return url.hostname.endsWith('icloud.com');
    }

    get contentRows(): any[][] {
        const shortcuts = this.shortcuts.slice();

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
        this.loadShortcuts({reset: true});
    }

    private submit() {
        if (!this.urlIsValid) {
            return false;
        }

        const pathComponents = this.url!.pathname.split('/');
        const id = pathComponents[pathComponents.length - 1];
        this.$router.push({ name: 'shortcut', params: { id } });
        return true;
    }

    private loadMore() {
        this.loadShortcuts({reset: false});
    }
}
</script>
