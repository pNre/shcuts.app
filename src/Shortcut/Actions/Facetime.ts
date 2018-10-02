import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class FacetimeAction extends Action implements DefaultContentProviding {
    public WFFaceTimeType: Value;

    constructor(object: any) {
        super(() => 'Facetime', object, () => ActionComponent, () => '📱');
        this.WFFaceTimeType = (NewValue(object.WFWorkflowActionParameters.WFFaceTimeType) || NewValue('Video'))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Call Type',
            content: null,
            componentConstructor: () => this.WFFaceTimeType.componentConstructor(),
        }];
    }
}
