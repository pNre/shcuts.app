<style lang="scss">
.progress {
    top: 0px;
    left: 0px;
    z-index: 999999;
    position: absolute;
}
</style>

<template>
    <div class="progress bar bar-sm" :style="containerStyle">
        <div class="bar-item" role="progressbar" :style="barStyle" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Progress extends Vue {
    @Prop({default: 0})
    private progress!: number;

    get barStyle(): any {
        return {
            width: this.progress + '%',
            transition: (this.progress > 0 ? 'width 0.2s, ' : '') + 'opacity 0.6s',
        };
    }

    get containerStyle(): any {
        return {
            opacity: this.progress > 0 ? 1 : 0,
        };
    }
}
</script>
