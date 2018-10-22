<template>
    <ActionComponent v-bind:action="action">
        <div class="card-body" :style="{overflow: 'scroll'}" v-if="action.WFTextActionText">
            <component :is="action.WFTextActionText.componentConstructor()"></component>
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
export default class GetTextActionComponent extends Vue {
    @Prop()
    private action!: Action;
}
</script>
