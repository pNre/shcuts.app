import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class DownloadURLAction extends Action implements DefaultContentProviding {
    public Advanced: boolean;
    public ShowHeaders: boolean;
    public WFHTTPMethod: Value;
    public WFHTTPHeaders?: Value;
    public WFHTTPBodyType: string;
    public WFJSONValues?: Value;
    public WFFormValues?: Value;
    public WFRequestVariable?: Value;

    constructor(object: any) {
        super(() => 'Get Contents of URL', object, () => ActionComponent);
        this.Advanced = object.WFWorkflowActionParameters.Advanced || false;
        this.ShowHeaders = object.WFWorkflowActionParameters.ShowHeaders || false;
        this.WFHTTPMethod = (NewValue(object.WFWorkflowActionParameters.WFHTTPMethod) || NewValue('GET'))!;
        this.WFHTTPHeaders = NewValue(object.WFWorkflowActionParameters.WFHTTPHeaders);
        this.WFHTTPBodyType = object.WFWorkflowActionParameters.WFHTTPBodyType || 'JSON';
        this.WFJSONValues = NewValue(object.WFWorkflowActionParameters.WFJSONValues);
        this.WFFormValues = NewValue(object.WFWorkflowActionParameters.WFFormValues);
        this.WFRequestVariable = NewValue(object.WFWorkflowActionParameters.WFRequestVariable);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (!this.Advanced) {
            return content;
        }

        content.push({
            title: 'Method',
            content: null,
            componentConstructor: () => this.WFHTTPMethod.componentConstructor(),
        });

        if (this.WFJSONValues) {
            content.push({
                title: 'Request Body',
                content: null,
                componentConstructor: () => this.WFJSONValues!.componentConstructor(),
            });
        }

        if (this.WFFormValues) {
            content.push({
                title: 'Request Body',
                content: null,
                componentConstructor: () => this.WFFormValues!.componentConstructor(),
            });
        }

        if (this.WFRequestVariable) {
            content.push({
                title: 'Request Body',
                content: null,
                componentConstructor: () => this.WFRequestVariable!.componentConstructor(),
            });
        } else if (this.WFHTTPBodyType === 'File') {
            content.push({
                title: 'Request Body',
                content: 'File',
                componentConstructor: null,
            });
        }

        if (!this.ShowHeaders) {
            return content;
        }

        content.push({
            title: 'Headers',
            content: null,
            componentConstructor: () => this.WFHTTPHeaders!.componentConstructor(),
        });

        return content;
    }
}
