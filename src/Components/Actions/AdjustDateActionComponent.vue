<template>
    <ActionComponent v-bind:action="action">
        <div v-if="action.WFAdjustOffsetPicker" class="card-body">
            <div class="tile tile-centered">
                <div class="tile-content">
                    <div class="tile-title">
                        <component :is="action.WFAdjustOffsetPicker.componentConstructor()" />
                    </div>
                </div>
            </div>
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
export default class AdjustDateActionComponent extends Vue {
    @Prop()
    private action!: Action;
}
</script>
