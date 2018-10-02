<template>
    <div>
        <div class="tile tile-centered">
            <div class="tile-content">
                <div class="tile-title" v-if="value.WFActionParameterFilterPrefix == 0">Any of the following are true</div>
                <div class="tile-title" v-else-if="value.WFActionParameterFilterPrefix == 1">All of the following are true</div>
                <div class="tile-subtitle">
                    <ul :style="{margin: 0}">
                        <li v-for="(template, index) in value.WFActionParameterFilterTemplates" :key="'tpl-' + index">
                        <component :is="template.componentConstructor()" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ContentPredicateTableTemplate } from '@/Shortcut/SerializedValues/ContentPredicateTableTemplate';

@Component
export default class ContentPredicateTableTemplateComponent extends Vue {
    @Prop()
    private value!: ContentPredicateTableTemplate;
}
</script>
