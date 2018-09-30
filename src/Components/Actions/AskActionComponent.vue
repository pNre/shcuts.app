<template>
    <ActionComponent v-bind:action="action">
        <div class="card-body">
            <div class="tile tile-centered" v-if="action.WFAskActionPrompt">
                <div class="tile-content">
                    <div class="tile-title text-gray">Question</div>
                    <div class="tile-subtitle">
                        <component :is="action.WFAskActionPrompt.componentConstructor()" :value="action.WFAskActionPrompt"></component>
                    </div>
                </div>
            </div>
            <div class="tile tile-centered" v-if="action.WFAskActionDefaultAnswer">
                <div class="tile-content">
                    <div class="tile-title text-gray">Default Answer</div>
                    <div class="tile-subtitle">  
                        <component :is="action.WFAskActionDefaultAnswer.componentConstructor()" :value="action.WFAskActionDefaultAnswer"></component>
                    </div>
                </div>
            </div>
            <div class="tile tile-centered">
                <div class="tile-content">
                    <div class="tile-title text-gray">Input Type</div>
                    <div class="tile-subtitle">{{ action.WFInputType }}</div>
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
export default class AskActionComponent extends Vue {
    @Prop()
    private action!: Action;
}
</script>
