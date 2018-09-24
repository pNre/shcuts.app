<template>
    <ActionComponent v-bind:action="action">
        <div class="card-body">
            <pre class="code"><component :is="action.WFTextActionText.componentConstructor()"></component></pre>
        </div>
    </ActionComponent>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from '@/Workflow/Action';
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
