<template>
    <div class="column col-3">
        <div class="card shortcut-card c-hand" :style="{height: '60px'}" @click="openShortcut">
            <div class="card-header">
                <div class="card-title shortcut-card-title h5" :style="titleStyle">{{shortcut.name}}</div>
                <div class="card-subtitle">{{ shortcut.description }}</div>
            </div>
            <div class="shortcut-card-tint" :style="tintStyle">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.shortcut-card {
    position: relative;

    &:focus,
    &:hover {
        opacity: 0.7;
        transition: all .2s ease-in;
    }
}

.shortcut-card-tint {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 0.6rem;
    position: absolute;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MiniShortcutComponent extends Vue {
    @Prop({default: undefined})
    private shortcut?: any;

    private shadeColor(color: string, percent: number): string {
        const f = parseInt(color, 16);
        const t = percent < 0 ? 0 : 255;
        const p = percent < 0 ? percent * -1 : percent;
        const R = f >> 16;
        const G = f >> 8 & 0x00FF;
        const B = f & 0x0000FF;
        return (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1); 
    }

    private get titleStyle(): any {
        if (this.shortcut.color) {
            return {
                color: `#${this.shadeColor(this.shortcut.color.slice(0, -2), -0.15)}`,
            };
        }

        return {};
    }

    private get tintStyle(): any {
        if (this.shortcut.color) {
            return {
                background: `#${this.shortcut.color.slice(0, -2)}`,
            };
        }

        return {};
    }

    private openShortcut() {
        this.$router.push({ name: 'shortcut', params: { id: this.shortcut.id } });
    }
}
</script>
