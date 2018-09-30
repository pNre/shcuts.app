import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class FormatNumberAction extends Action implements DefaultContentProviding {
    public WFNumberFormatDecimalPlaces: Value;

    constructor(object: any) {
        super(() => 'Format Number', object, () => ActionComponent);
        this.WFNumberFormatDecimalPlaces = (NewValue(object.WFWorkflowActionParameters.WFNumberFormatDecimalPlaces) || NewValue(2))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Decimal Places',
            content: null,
            componentConstructor: () => this.WFNumberFormatDecimalPlaces.componentConstructor(),
        }];
    }
}
