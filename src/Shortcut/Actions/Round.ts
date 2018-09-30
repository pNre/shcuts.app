import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class RoundAction extends Action implements DefaultContentProviding {
    public WFRoundType: Value;
    public WFRoundMode: Value;
    public WFRoundDecimalPlaces?: Value;

    constructor(object: any) {
        super(() => 'Round Number', object, () => ActionComponent);
        this.WFRoundType = (NewValue(object.WFWorkflowActionParameters.WFRoundType) || NewValue('Left of Decimal'))!;
        this.WFRoundMode = (NewValue(object.WFWorkflowActionParameters.WFRoundMode) || NewValue('Normal'))!;
        this.WFRoundDecimalPlaces = NewValue(object.WFWorkflowActionParameters.WFRoundDecimalPlaces);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Round',
            content: null,
            componentConstructor: () => this.WFRoundType.componentConstructor(),
        }, {
            title: 'Mode',
            content: null,
            componentConstructor: () => this.WFRoundMode.componentConstructor(),
        }];

        if (this.WFRoundDecimalPlaces) {
            content.push({
                title: 'Decimal Places',
                content: null,
                componentConstructor: () => this.WFRoundDecimalPlaces!.componentConstructor(),
            });
        }

        return content;
    }
}
