<template>
  <ActionComponent v-bind:action="action">
    <div class="card-body">
        <div v-if="action.WFCalendarItemTitle" class="tile tile-centered">
            <div class="tile-content">
                <div class="tile-title text-gray">Title</div>
                <div class="tile-subtitle">
                    <component :is="action.WFCalendarItemTitle.componentConstructor()" />
                </div>
            </div>
        </div>
        <div v-if="action.WFAlertTrigger" class="tile tile-centered">
            <div class="tile-content">
                <div class="tile-title text-gray">Remind</div>
                <div class="tile-subtitle">
                    <component :is="action.WFAlertTrigger.componentConstructor()" />
                </div>
            </div>
        </div>
        <div v-if="action.WFAlertCustomTime" class="tile tile-centered">
            <div class="tile-content">
                <div class="tile-title text-gray">Alert Time</div>
                <div class="tile-subtitle">
                    <component :is="action.WFAlertCustomTime.componentConstructor()" />
                </div>
            </div>
        </div>
        <div v-if="action.WFCalendarItemNotes" class="tile tile-centered">
            <div class="tile-content">
                <div class="tile-title text-gray">Note</div>
                <div class="tile-subtitle">
                    <component :is="action.WFCalendarItemNotes.componentConstructor()" />
                </div>
            </div>
        </div>
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
export default class AddNewReminderActionComponent extends Vue {
    @Prop()
    private action!: Action;
}
</script>
