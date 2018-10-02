import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class GenerateBarcodeAction extends Action implements DefaultContentProviding {
    public WFQRErrorCorrectionLevel: Value;

    constructor(object: any) {
        super(() => 'Generate Barcode', object, () => ActionComponent);
        this.WFQRErrorCorrectionLevel = (NewValue(object.WFWorkflowActionParameters.WFQRErrorCorrectionLevel) || NewValue('Medium'))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Error Correction',
            content: null,
            componentConstructor: () => this.WFQRErrorCorrectionLevel.componentConstructor(),
        }];
    }
}
