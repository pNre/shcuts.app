<template>
    <ActionComponent v-bind:action="action">
        <div class="card-body">
            <div class="tile tile-centered">
                <div class="tile-content">
                    <div class="tile-title text-gray">Use</div>
                    <div class="tile-subtitle">Current Date</div>
                </div>
            </div>
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
export default class DateActionComponent extends Vue {
    @Prop()
    private action!: Action;
}
</script>
