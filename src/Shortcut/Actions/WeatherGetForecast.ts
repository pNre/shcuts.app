import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Action } from '@/Shortcut/Action';
import { DefaultContent } from '@/Shortcut/DefaultContentProviding';
import { NewValue, Value } from '@/Shortcut/Value';

export default class WeatherGetForecastAction extends Action {
    public WFWeatherLocation?: string;
    public WFWeatherCustomLocation?: Value;
    public WFWeatherForecastType?: Value;

    constructor(object: any) {
        super(() => 'Get Weather Forecast', object, () => ActionComponent, () => '🌤');
        this.WFWeatherLocation = object.WFWorkflowActionParameters.WFWeatherLocation;
        this.WFWeatherCustomLocation = NewValue(object.WFWorkflowActionParameters.WFWeatherCustomLocation);
        this.WFWeatherForecastType = NewValue(object.WFWorkflowActionParameters.WFWeatherForecastType);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFWeatherLocation) {
            content.push({
                title: 'At',
                content: this.WFWeatherLocation,
                componentConstructor: null,
            });
        }

        if (this.WFWeatherCustomLocation) {
            content.push({
                title: 'Location',
                content: null,
                componentConstructor: () => this.WFWeatherCustomLocation!.componentConstructor(),
            });
        }

        if (this.WFWeatherForecastType) {
            content.push({
                title: 'Type',
                content: null,
                componentConstructor: () => this.WFWeatherForecastType!.componentConstructor(),
            });
        }

        return content;
    }
}
