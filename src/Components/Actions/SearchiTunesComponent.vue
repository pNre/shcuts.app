<template>
    <ActionComponent v-bind:action="action">
        <div class="card-body">
            <div class="tile tile-centered">
                <div class="tile-content">
                    <div class="tile-title text-gray">Search</div>
                    <div class="tile-subtitle">
                        <component :is="action.WFSearchTerm.componentConstructor()"></component>
                    </div>
                </div>
            </div>
            <div class="tile tile-centered">
                <div class="tile-content">
                    <div class="tile-title text-gray">Category</div>
                    <div class="tile-subtitle">{{ action.WFMediaType }}</div>
                </div>
            </div>
            <div class="tile tile-centered">
                <div class="tile-content">
                    <div class="tile-title text-gray">Limit</div>
                    <div class="tile-subtitle">{{ action.WFItemLimit.toString() }}</div>
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
export default class SearchiTunesActionComponent extends Vue {
    @Prop()
    private action!: Action;
}
</script>
