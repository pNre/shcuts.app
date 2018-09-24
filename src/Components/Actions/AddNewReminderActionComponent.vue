<template>
  <ActionComponent v-bind:action="action">
    <div class="card-body">
      <div class="tile tile-centered">
          <div class="tile-content">
              <div class="tile-title text-gray">Title</div>
              <div class="tile-subtitle">{{ action.WFCalendarItemTitle }}</div>
          </div>
      </div>
      <div class="tile tile-centered">
          <div class="tile-content">
              <div class="tile-title text-gray">Remind</div>
              <div class="tile-subtitle">{{ action.WFAlertTrigger }}</div>
          </div>
      </div>
      <div class="tile tile-centered">
          <div class="tile-content">
              <div class="tile-title text-gray">Alert Time</div>
              <div class="tile-subtitle">
                <component :is="action.WFAlertCustomTime.componentConstructor()" :value="action.WFAlertCustomTime"></component>
              </div>
          </div>
      </div>
      <div v-if="action.WFCalendarItemNotes" class="tile tile-centered">
          <div class="tile-content">
              <div class="tile-title text-gray">Note</div>
              <div class="tile-subtitle">
                <component :is="action.WFCalendarItemNotes.componentConstructor()" :value="action.WFCalendarItemNotes"></component>
              </div>
          </div>
      </div>
    </div>
  </ActionComponent>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from '@/Workflow/Action';
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
