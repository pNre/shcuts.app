<template>
    <div>
        <ChipComponent v-if="'WFValue' in value || 'WFSerializationType' in value" :value="value.description()" icon="⚙️" />
        <span v-else>{{ value.description() }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ChipComponent from '@/Components/Generic/ChipComponent.vue';
import { Value } from '@/Workflow/Value';

@Component({
    components: {
        ChipComponent,
    },
})
export default class ValueComponent extends Vue {
    private value?: Value;
}
</script>
