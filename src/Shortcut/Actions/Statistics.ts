import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class StatisticsAction extends Action implements DefaultContentProviding {
    public WFStatisticsOperation?: Value;

    constructor(object: any) {
        super(() => 'Calculate Statistics', object, () => ActionComponent, () => '📊');
        this.WFStatisticsOperation = NewValue(object.WFWorkflowActionParameters.WFStatisticsOperation);
    }

    public defaultContent(): DefaultContent[] {
        if (!this.WFStatisticsOperation) {
            return [];
        }

        return [{
            title: 'Operation',
            content: null,
            componentConstructor: () => this.WFStatisticsOperation!.componentConstructor(),
        }];
    }
}
