import uuidv4 from 'uuid/v4';
import { Action } from '@/Workflow/Action';
import SearchiTunesActionComponent from '@/Components/Actions/SearchiTunesComponent.vue';
import { NewValue, Value } from '@/Workflow/Value';

export default class SearchiTunesAction implements Action {
    public component = {
        key: uuidv4(),
        name: 'Search iTunes',
        componentConstructor: () => SearchiTunesActionComponent,
    };

    public UUID?: string;
    public WFSearchTerm: Value;
    public WFItemLimit: number;
    public WFMediaType: string;

    constructor(object: any) {
        this.UUID = object.WFWorkflowActionParameters.UUID;
        this.WFItemLimit = object.WFWorkflowActionParameters.WFItemLimit;
        this.WFMediaType = object.WFWorkflowActionParameters.WFMediaType;
        this.WFSearchTerm = NewValue(object.WFWorkflowActionParameters.WFSearchTerm);
    }
}
