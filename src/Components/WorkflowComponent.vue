<template>
    <div>
        <div class="columns">
            <div class="column col-4 col-mx-auto" v-if="workflow">
                <template v-for="(action, index) in workflow.actions">
                    <div v-if="action.indentationLevel > 0" :key="index" :class="`column col-${12 - action.indentationLevel} col-ml-auto`">
                        <component :is="action.component.componentConstructor()" :key="action.component.key" :action="action"></component>
                    </div>
                    <div v-else :key="index" class="column col-mx-auto">
                        <component :is="action.component.componentConstructor()" :key="action.component.key" :action="action"></component>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Workflow } from '@/Workflow/Workflow';

@Component
export default class WorkflowComponent extends Vue {
    @Prop({default: undefined})
    private name?: string;

    private workflow: Workflow | null = null;

    private async created() {
        try {
            const response = await axios.get('/' + (this.name || 'test.plist'));
            this.workflow = Workflow.fromSource(response.data);
        } catch (e) {
            console.error(e);
        }
    }
}
</script>
