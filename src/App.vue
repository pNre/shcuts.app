<template>
    <div class="container">
        <Progress :progress="progress" />
        <header class="navbar hide-sm">
            <section class="navbar-section">
                <router-link to="/" class="navbar-brand mr-2">Shortcuts</router-link>
            </section>
        </header>
        <router-view />
    </div>
</template>

<style lang="scss">
$html-font-size: 18px;
$primary-color: #393e46;
$secondary-color: #e6e6e6;

@import 'spectre.css/src/spectre.scss';

header {
    margin-top: 2px;
}

.card {
    overflow: hidden;
    margin-top: $unit-3;
    margin-bottom: $unit-3;
}

.with-padding {
    padding: $unit-3;
}

.card-header,
.card-body {
    padding: $unit-3 !important;
}

.tile {
    &:not(:first-child) {
        margin-top: $unit-3;
    }
  
    &:not(:last-child) {
        margin-bottom: $unit-3;
    }
}

.tile-title,
.tile-subtitle {
    white-space: normal !important;
}

.btn {
    &.btn-link {
        &:focus {
            box-shadow: none;
        }
    }
}

.label {
    border-radius: 10px;
}

.bar-item {
    background: $gray-color !important;
}

.form-switch {
    input:disabled + .form-icon {
        opacity: 1;
    }
}
</style>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import Progress from '@/Components/Progress.vue';

@Component({
    components: {
        Progress,
    },
    computed: {
        isLoading(): number {
            return this.$store.getters.isLoading;
        },
    },
})
export default class App extends Vue {
    private timer: any = null;
    private progress: number = 0;

    @Watch('isLoading')
    private isLoadingDidChange(isLoading: boolean, _: boolean) {
        clearInterval(this.timer);
        if (isLoading) {
            this.startLoading();
        } else {
            this.stopLoading();
        }
    }

    private startLoading() {
        this.timer = setInterval(() => {
            this.progress = Math.min(100, this.progress + 5 * Math.random());
        }, 100);
    }

    private stopLoading() {
        this.timer = null;
        this.progress = 100;
        Vue.nextTick(() => {
            setTimeout(() => {
                this.progress = 0;
            }, 300);
        });
    }
}
</script>
