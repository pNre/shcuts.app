<template>
    <div class="card">
        <div class="card-header bg-gray">
            <div class="card-title">
                <div class="tile tile-centered">
                    <div class="tile-content">
                        <div v-if="typeof action.component.name === 'string'" class="tile-title h6">
                            <span v-if="action.component.icon" class="label">{{ action.component.icon }}</span> {{ action.component.name }}
                        </div>
                        <div v-else class="tile-title h6">
                            <span v-if="action.component.icon" class="label">{{ action.component.icon }}</span> <component :is="action.component.name" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <slot>
            <div v-if="'defaultContent' in action && (action.defaultContent().length || 0) > 0" class="card-body">
                <template v-for="(entry, index) in action.defaultContent()">
                    <div :key="index" class="tile tile-centered">
                        <div class="tile-content">
                            <div class="tile-title text-gray" v-if="entry.title">{{ entry.title }}</div>
                            <div class="tile-subtitle" v-if="entry.content">
                                {{ entry.content }}
                            </div>
                            <div class="tile-subtitle" v-else-if="entry.componentConstructor">
                                <component :is="entry.componentConstructor()" />
                            </div>
                        </div>
                    </div>
                </template>
            </div>
            <div v-else-if="'componentConstructor' in action && action.componentConstructor()" class="card-body">
                <div class="tile tile-centered">
                    <div class="tile-content">
                        <component :is="action.componentConstructor()" />
                    </div>
                </div>
            </div>
        </slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from '@/Shortcut/Action';

@Component
export default class ActionComponent extends Vue {
    @Prop({default: null})
    private action!: Action | null;
}
</script>
