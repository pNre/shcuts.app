<template>
    <div v-if="shortcut" class="container with-padding">
        <h2 class="mb-1">{{shortcut.name}}</h2>
        <h6 v-if="shortcut.description" class="mb-2 text-gray">{{shortcut.description}}</h6>
        <div class="columns col-online col-gapless mt-2 mb-2">
            <div class="column col-2">
                <a :href="'https://icloud.com/shortcuts/' + shortcut.id" target="_blank" class="btn btn-sm">Open on iCloud</a>
            </div>
            <div v-if="views" :style="{'text-align': 'right'}" class="column col-2 col-ml-auto">
                {{views}}
            </div>
        </div>
        <div v-if="shortcut.inputContentItemClassDescription.length > 0" class="columns col-online col-gapless mt-2 pt-1 centered text-center">
            <h6>This shortcut accepts <strong>{{shortcut.inputContentItemClassDescription}}</strong></h6>
        </div>
        <template v-for="(action, index) in shortcut.actions">
            <div :class="`columns col-oneline mt-1 mb-1`" :key="'action-row-' + index">
                <div v-if="action.indentationLevel > 0" :key="index" :class="`column col-${12 - action.indentationLevel} col-ml-auto`">
                    <component :is="action.component.componentConstructor()" :key="action.component.key" :action="action"></component>
                </div>
                <div v-else :key="index" class="column col-mx-auto">
                    <component :is="action.component.componentConstructor()" :key="action.component.key" :action="action"></component>
                </div>
            </div>
        </template>
    </div>
    <div v-else class="loading loading-lg" :style="{'min-height': '10rem'}"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Shortcut } from '@/Shortcut/Shortcut';

@Component
export default class ShortcutComponent extends Vue {
    @Prop()
    private id!: string;

    private get shortcut(): Shortcut | null {
        return this.$store.state.shortcutDetails[this.id];
    }

    private get views(): string | null {
        if (!this.shortcut || !this.shortcut.views) {
            return null;
        }

        return `${this.shortcut.views} views`;
    }

    private created() {
        if (!this.shortcut) {
            this.$store.dispatch('loadShortcutDetail', this.id);
        }
    }

    private fallbackToHome() {
        this.$router.replace({name: 'home'});
    }
}
</script>
