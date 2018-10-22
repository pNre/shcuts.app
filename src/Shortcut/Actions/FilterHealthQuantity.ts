import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import FilterAction from '@/Shortcut/Actions/Filter';
import { Value, NewValue } from '../Value';
import { DefaultContent } from '../DefaultContentProviding';

export default class FilterHealthQuantityAction extends FilterAction {
    public WFHKSampleFilteringUnit?: Value;

    constructor(object: any) {
        super(() => 'Find Health Samples Where', object, () => ActionComponent, () => '🧡');
        this.WFHKSampleFilteringUnit = NewValue(object.WFWorkflowActionParameters.WFHKSampleFilteringUnit);
    }

    public defaultContent(): DefaultContent[] {
        const content = super.defaultContent();

        if (this.WFHKSampleFilteringUnit) {
            content.push({
                title: 'Unit',
                content: null,
                componentConstructor: () => this.WFHKSampleFilteringUnit!.componentConstructor(),
            });
        }

        return content;
    }
}
