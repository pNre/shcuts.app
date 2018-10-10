<template>
    <div class="column col-3 col-sm-6">
        <div class="card shortcut-card c-hand p-1" :style="cardStyle" @click="openShortcut">
            <div class="card-header">
                <div class="card-title shortcut-card-title h5">{{shortcut.name}}</div>
                <div v-if="shortcut.description" class="card-subtitle shortcut-card-subtitle mt-1">{{shortcut.description}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.shortcut-card {
    position: relative;
    border-radius: 12px;
    border: 0;

    &:focus,
    &:hover {
        opacity: 0.7;
        transition: all .2s ease-in;
    }
}

.shortcut-card-subtitle {
    color: #efefef;
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
}

.shortcut-card-title {
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 2.4em;
    line-height: 1.2em;
    color: white;
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
        const outR = ('0' + (Math.round((t - R) * p) + R).toString(16));
        const outG = ('0' + (Math.round((t - G) * p) + G).toString(16));
        const outB = ('0' + (Math.round((t - B) * p) + B).toString(16));
        return outR.substring(outR.length - 2) + outG.substring(outG.length - 2) + outB.substring(outB.length - 2);
    }

    private isLight(color: string): boolean {
        const f = parseInt(color, 16);
        const R = f >> 16;
        const G = f >> 8 & 0x00FF;
        const B = f & 0x0000FF;
        const lum = 1 - (0.299 * R + 0.587 * G + 0.114 * B) / 255;
        return lum < 0.5;
    }

    private get cardStyle(): any {
        const base: { [key: string]: any | null } = { 'min-height': '90px', 'background': null };

        if (this.shortcut.color) {
            const color = this.shortcut.color.slice(0, -2);
            const isLight = this.isLight(color);

            const offsets = [0, 20, 60, 100];
            const steps = [0, 0.05, 0.1, 0.15]
                .map((x) => isLight ? (x * -1) : x)
                .sort((a, b) => b - a);

            const values: string[] = [];
            for (const [i, e] of steps.entries()) {
                values.push(`#${this.shadeColor(color, e)} ${offsets[i]}%`);
            }

            base.background = [
                `#${color}`,
                `linear-gradient(135deg, ${values.join(', ')})`,
            ];
        }

        return base;
    }

    private openShortcut() {
        this.$router.push({ name: 'shortcut', params: { id: this.shortcut.id } });
    }
}
</script>
