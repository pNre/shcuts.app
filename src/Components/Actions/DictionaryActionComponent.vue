<template>
    <ActionComponent v-bind:action="action">
        <div class="card-body" v-if="action.WFItems">
            <component :is="action.WFItems.componentConstructor()" />
        </div>
    </ActionComponent>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

@Component({
    components: {
        ActionComponent,
    },
})
export default class DictionaryActionComponent extends Vue {
    @Prop()
    private action!: Action;
}
</script>
