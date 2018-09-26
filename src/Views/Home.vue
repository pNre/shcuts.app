<template>
    <div class="columns">
        <div class="column col-4 col-mx-auto">
            <form @submit.prevent="submit">
                <div class="columns">
                    <div class="col-9">
                        <input type="text" class="form-input" placeholder="Shortcut iCloud URL" v-model="urlString">
                    </div>
                    <div class="col-2 col-mx-auto">
                        <button class="btn btn-primary input-group-btn" :disabled="this.url == null">Load</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from 'vue-property-decorator';
import Path from 'path';

@Component
export default class Home extends Vue {
    private urlString: string = "";
    
    get url(): URL | null {
        try {
            return new URL(this.urlString);
        } catch (_) {
            return null;
        }
    }

    private submit() {
        const url = this.url;
        if (!url) {
            return false;
        }

        if (!url.hostname.endsWith("icloud.com")) {
            return false;
        }

        const pathComponents = url.pathname.split('/');
        const id = pathComponents[pathComponents.length - 1];
        this.$router.push({ name: 'fetched_shortcut', params: { id } });

        return true;
    }
}
</script>
