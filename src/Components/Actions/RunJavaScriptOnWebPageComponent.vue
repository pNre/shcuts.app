<template>
    <ActionComponent v-bind:action="action">
        <div class="card-body" v-if="action.WFJavaScript">
            <pre class="code"><component ref="code" :class="`language-javascript`" :is="action.WFJavaScript.componentConstructor()" /></pre>
        </div>
    </ActionComponent>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import Prism from 'prismjs';
import '@/Assets/prism.css';

@Component({
    components: {
        ActionComponent,
    },
    mounted() {
        Prism.highlightElement((this.$refs.code as any).$el as Element);
    },
})
export default class RunJavaScriptOnWebPageComponent extends Vue {
    @Prop({default: null})
    private action!: Action | null;
}
</script>
