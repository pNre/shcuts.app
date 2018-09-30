<template>
    <div v-if="shortcut" class="container with-padding">
        <h2>{{shortcut.name}}</h2>
        <a :href="'https://icloud.com/shortcuts/' + shortcut.id" target="_blank" class="btn btn-sm">Open on iCloud</a>
        <template v-for="(action, index) in shortcut.actions">
            <div :class="`columns col-oneline mt-${index == 0 ? '2' : '1'} mb-1`" :key="'action-row-' + index">
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
