<template>
    <ActionComponent v-bind:action="action">
        <div class="card-body" v-if="action.WFItems.length > 0">
            <template v-for="(item, index) in action.WFItems">
                <div v-bind:key="index">
                    <div class="tile tile-centered">
                        <div class="tile-content">
                            <div class="tile-title">
                                <component :is="item.componentConstructor()" />
                            </div>
                        </div>
                    </div>
                    <div v-if="index < action.WFItems.length - 1" class="divider"></div>
                </div>
            </template>
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
export default class ListActionComponent extends Vue {
    @Prop()
    private action!: Action;
}
</script>
