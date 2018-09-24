<template>
    <div>
        <WorkflowComponent :name="$route.params.name" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WorkflowComponent from '@/Components/WorkflowComponent.vue';

@Component({
    components: {
        WorkflowComponent,
    },
})
export default class Shortcut extends Vue {}
</script>
