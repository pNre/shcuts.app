<template>
    <div class="columns">
        <div class="column col-8 col-md-12 col-mx-auto">
            <ShortcutComponent :id="$route.params.id" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShortcutComponent from '@/Components/ShortcutComponent.vue';

@Component({
    components: {
        ShortcutComponent,
    },
})
export default class Shortcut extends Vue {}
</script>
