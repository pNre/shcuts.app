export enum AggrandizementType {
    PropertyVariable = 'WFPropertyVariableAggrandizement',
    CoercionVariable = 'WFCoercionVariableAggrandizement',
    DictionaryValue = 'WFDictionaryValueVariableAggrandizement',
    DateFormat = 'WFDateFormatVariableAggrandizement',
}

export class Aggrandizement {
    public Type: AggrandizementType;
    public PropertyName?: string;
    public CoercionItemClass?: string;
    public DictionaryKey?: string;
    public WFDateFormatStyle?: string;
    public WFTimeFormatStyle?: string;
    public WFISO8601IncludeTime?: boolean;

    constructor(source: any) {
        this.Type = source.Type;
        this.PropertyName = source.PropertyName;
        this.CoercionItemClass = source.CoercionItemClass;
        this.DictionaryKey = source.DictionaryKey;
        this.WFDateFormatStyle = source.WFDateFormatStyle;
        this.WFTimeFormatStyle = source.WFTimeFormatStyle;
        this.WFISO8601IncludeTime = source.WFISO8601IncludeTime;
    }

    public description(): string | null {
        switch (this.Type) {
            case AggrandizementType.PropertyVariable:
                return this.PropertyName ? this.PropertyName! : this.Type;
            case AggrandizementType.CoercionVariable:
                return null;
            case AggrandizementType.DictionaryValue:
                return this.DictionaryKey ? this.DictionaryKey! : this.Type;
            case AggrandizementType.DateFormat:
                const components = [];
                if (this.WFDateFormatStyle) {
                    components.push(`Date style: ${this.WFDateFormatStyle}`);
                }

                if (this.WFTimeFormatStyle) {
                    components.push(`Time style: ${this.WFTimeFormatStyle}`);
                }

                return components.join(', ');
            default:
                return this.Type;
        }
    }
}
