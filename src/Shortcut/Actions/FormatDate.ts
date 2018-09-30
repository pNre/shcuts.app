import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class FormatDateAction extends Action implements DefaultContentProviding {
    public WFDateFormatStyle: Value;
    public WFTimeFormatStyle: Value;

    constructor(object: any) {
        super(() => 'Format Date', object, () => ActionComponent, () => '📅');
        this.WFDateFormatStyle = (NewValue(object.WFWorkflowActionParameters.WFDateFormatStyle) || NewValue('Short'))!;
        this.WFTimeFormatStyle = (NewValue(object.WFWorkflowActionParameters.WFTimeFormatStyle) || NewValue('Short'))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Date Format',
            content: null,
            componentConstructor: () => this.WFDateFormatStyle.componentConstructor(),
        }, {
            title: 'Time Format',
            content: null,
            componentConstructor: () => this.WFTimeFormatStyle.componentConstructor(),
        }];
    }
}
