import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class TakePhotoAction extends Action implements DefaultContentProviding {
    public WFPhotoCount: Value;
    public WFCameraCaptureShowPreview: Value;
    public WFCameraCaptureDevice: Value;

    constructor(object: any) {
        super(() => 'Take Photo', object, () => ActionComponent, () => '📷');
        this.WFCameraCaptureDevice = (NewValue(object.WFWorkflowActionParameters.WFCameraCaptureDevice) || NewValue('Back'))!;
        this.WFCameraCaptureShowPreview = (NewValue(object.WFWorkflowActionParameters.WFCameraCaptureShowPreview) || NewValue(true))!;
        this.WFPhotoCount = (NewValue(object.WFWorkflowActionParameters.WFPhotoCount) || NewValue(1))!;
    }

    public defaultContent(): DefaultContent[] {
        return [{
            title: 'Show Camera Preview',
            content: null,
            componentConstructor: () => this.WFCameraCaptureShowPreview.componentConstructor(),
        }, {
            title: 'Camera',
            content: null,
            componentConstructor: () => this.WFCameraCaptureDevice.componentConstructor(),
        }, {
            title: 'Number of photos',
            content: null,
            componentConstructor: () => this.WFPhotoCount.componentConstructor(),
        }];
    }
}
