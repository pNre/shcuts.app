<template>
    <ActionComponent v-bind:action="action">
        <div class="card-body" v-if="action.hasBody">
            <div class="tile tile-centered" v-if="action.WFCondition">
                <div class="tile-content">
                    <div class="tile-title text-gray">Input</div>
                    <div class="tile-subtitle">{{ action.WFCondition }}</div>
                </div>
            </div>
            <div class="tile tile-centered" v-if="action.WFConditionalActionString">
                <div class="tile-content">
                    <div class="tile-title text-gray">Value</div>
                    <div class="tile-subtitle">
                        <component :is="action.WFConditionalActionString.componentConstructor()"></component>
                    </div>
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
export default class ConditionalActionComponent extends Vue {
    @Prop()
    private action!: Action;
}
</script>
