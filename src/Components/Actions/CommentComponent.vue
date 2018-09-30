<template>
    <div class="card">
        <div class="card-header comment-card-header">
            <div class="card-title">
                <div class="tile tile-centered">
                    <div class="tile-content">
                        <div class="tile-title h6"><span v-if="action.component.icon" class="label">{{ action.component.icon }}</span> Comment</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="action.WFCommentActionText" class="card-body comment-card-body">
            <div class="tile tile-centered">
                <div class="tile-content">{{ action.WFCommentActionText }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from '@/Shortcut/Action';

@Component
export default class CommentComponent extends Vue {
    @Prop({default: null})
    private action!: Action | null;
}
</script>

<style lang="scss">
.comment-card-header {
    background: #fafac2;
}

.comment-card-body {
    background: #fcfcea;
}
</style>
