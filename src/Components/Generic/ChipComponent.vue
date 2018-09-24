<template>
    <span v-if="value" class="chip"><figure v-if="icon" class="avatar avatar-sm" :data-initial="icon" style="background-color: #FF5D73;"></figure>{{ value }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ChipComponent extends Vue {
    @Prop({default: undefined})
    private value?: string;

    @Prop({default: undefined})
    private icon?: string;
}
</script>
