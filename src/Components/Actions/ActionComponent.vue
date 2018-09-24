<template>
    <div class="card">
        <div class="card-header bg-gray">
            <div class="card-title">
                <div class="tile tile-centered">
                    <div class="tile-content">
                        <div class="tile-title h6">{{ action.component.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <slot>
            <div v-if="'defaultContent' in action && action.defaultContent()" class="card-body">
                <template v-for="(entry, index) in action.defaultContent()">
                    <div :key="index" class="tile tile-centered">
                        <div class="tile-content">
                            <div class="tile-title text-gray">{{ entry.title }}</div>
                            <div class="tile-subtitle">{{ entry.content }}</div>
                        </div>
                    </div>
                </template>
            </div>
            <div v-else-if="'componentConstructor' in action && action.componentConstructor()" class="card-body">
                <div class="tile tile-centered">
                    <div class="tile-content">
                        <component :is="action.componentConstructor()"></component>
                    </div>
                </div>
            </div>
        </slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from '@/Workflow/Action';

@Component
export default class ActionComponent extends Vue {
    @Prop({default: null})
    private action!: Action | null;
}
</script>
