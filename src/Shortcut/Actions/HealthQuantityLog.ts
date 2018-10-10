import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { NewValue, Value } from '@/Shortcut/Value';

export default class HealthQuantityAction extends Action implements DefaultContentProviding {
    public WFQuantitySampleType?: Value;
    public WFQuantitySampleQuantity?: Value;
    public WFQuantitySampleDate?: Value;

    constructor(object: any) {
        super(() => 'Log Health Sample', object, () => ActionComponent, () => '🧡');
        this.WFQuantitySampleType = NewValue(object.WFWorkflowActionParameters.WFQuantitySampleType);
        this.WFQuantitySampleQuantity = NewValue(object.WFWorkflowActionParameters.WFQuantitySampleQuantity);
        this.WFQuantitySampleDate = NewValue(object.WFWorkflowActionParameters.WFQuantitySampleDate);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFQuantitySampleType) {
            content.push({
                title: 'Type',
                content: null,
                componentConstructor: () => this.WFQuantitySampleType!.componentConstructor(),
            });
        }

        if (this.WFQuantitySampleQuantity) {
            content.push({
                title: 'Value',
                content: null,
                componentConstructor: () => this.WFQuantitySampleQuantity!.componentConstructor(),
            });
        }

        if (this.WFQuantitySampleDate) {
            content.push({
                title: 'Date',
                content: null,
                componentConstructor: () => this.WFQuantitySampleDate!.componentConstructor(),
            });
        }

        return content;
    }
}
