import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class TakeVideoAction extends Action implements DefaultContentProviding {
    public WFCameraCaptureQuality: Value;
    public WFCameraCaptureDevice: Value;

    constructor(object: any) {
        super(() => 'Take Video', object, () => ActionComponent, () => '📹');
        this.WFCameraCaptureDevice = (NewValue(object.WFWorkflowActionParameters.WFCameraCaptureDevice) || NewValue('Back'))!;
        this.WFCameraCaptureQuality = (NewValue(object.WFWorkflowActionParameters.WFCameraCaptureQuality) || NewValue('Medium'))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Camera',
            content: null,
            componentConstructor: () => this.WFCameraCaptureDevice.componentConstructor(),
        }, {
            title: 'Quality',
            content: null,
            componentConstructor: () => this.WFCameraCaptureQuality.componentConstructor(),
        }];
    }
}
