import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { NewValue, Value } from '@/Shortcut/Value';

export default class MathAction extends Action implements DefaultContentProviding {
    public WFMathOperation: Value;
    public WFMathOperand?: Value;

    constructor(object: any) {
        super(() => 'Calculate', object, () => ActionComponent, () => '➗');
        this.WFMathOperation = (NewValue(object.WFWorkflowActionParameters.WFMathOperation) || NewValue('+'))!;
        this.WFMathOperand = NewValue(object.WFWorkflowActionParameters.WFMathOperand);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [{
            title: 'Operation',
            content: null,
            componentConstructor: () => this.WFMathOperation.componentConstructor(),
        }];

        if (this.WFMathOperand) {
            content.push({
                title: 'Operand',
                content: null,
                componentConstructor: () => this.WFMathOperand!.componentConstructor(),
            });
        }

        return content;
    }
}
