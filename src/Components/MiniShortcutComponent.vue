<template>
    <div class="column col-3">
        <div class="card shortcut-card c-hand" :style="{height: '80px'}" @click="openShortcut">
            <div class="card-header shortcut-card-header">
                <div class="card-title shortcut-card-title h5" :style="titleStyle">{{shortcut.name}}</div>
                <!-- <div class="card-subtitle">{{ shortcut.description }}</div> -->
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

.shortcut-card-header {
    height: 90%;
}

.shortcut-card-title {
    display: block;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 2.4em;
    line-height: 1.2em;
}

.shortcut-card-tint {
    bottom: 0;
    width: 100%;
    height: 10%;
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
        const outR = ('0' + (Math.round((t - R) * p) + R).toString(16)).substring(-2);
        const outG = ('0' + (Math.round((t - G) * p) + G).toString(16)).substring(-2);
        const outB = ('0' + (Math.round((t - B) * p) + B).toString(16)).substring(-2);
        return outR + outG + outB;
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
