import { Action } from '@/Shortcut/Action';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';

export default class ScanBarcodeAction extends Action {
    constructor(object: any) {
        super(() => 'Scan QR/Barcode', object, () => ActionComponent, () => '🔲');
    }
}
