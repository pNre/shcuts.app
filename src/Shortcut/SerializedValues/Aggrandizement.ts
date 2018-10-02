export enum AggrandizementType {
    PropertyVariable = 'WFPropertyVariableAggrandizement',
    CoercionVariable = 'WFCoercionVariableAggrandizement',
    DictionaryValue = 'WFDictionaryValueVariableAggrandizement',
}

export class Aggrandizement {
    public Type: AggrandizementType;
    public PropertyName?: string;
    public CoercionItemClass?: string;
    public DictionaryKey?: string;

    constructor(source: any) {
        this.Type = source.Type;
        this.PropertyName = source.PropertyName;
        this.CoercionItemClass = source.CoercionItemClass;
        this.DictionaryKey = source.DictionaryKey;
    }

    public description(): string | null {
        switch (this.Type) {
            case AggrandizementType.PropertyVariable:
                return this.PropertyName ? this.PropertyName! : this.Type;
            case AggrandizementType.CoercionVariable:
                return null;
            case AggrandizementType.DictionaryValue:
                return this.DictionaryKey ? this.DictionaryKey! : this.Type;
            default:
                return this.Type;
        }
    }
}
