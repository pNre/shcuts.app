export enum AggrandizementType {
    PropertyVariable = 'WFPropertyVariableAggrandizement',
}

export class Aggrandizement {
    public Type: AggrandizementType;
    public PropertyName?: string;

    constructor(source: any) {
        this.Type = source.Type;
        this.PropertyName = source.PropertyName;
    }

    public description(): string {
        switch (this.Type) {
            case AggrandizementType.PropertyVariable:
                return this.PropertyName ? this.PropertyName! : '<Property>';
            default:
                return this.Type;
        }
    }
}
