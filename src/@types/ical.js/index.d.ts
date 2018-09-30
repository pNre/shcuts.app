declare module "ical.js" {
    export function parse(input: string): any | any[];

    export class Component {
        readonly name: string;

        constructor(jCal: any[] | string, parent?: Component)
        getAllProperties(name?: string): Property[]
        getFirstProperty(name?: string): Property | null
        getFirstPropertyValue(name?: string): string | null
        hasProperty(name: string): boolean
    }

    export class Property {
        readonly name: string;
        readonly type: string;

        getDefaultType(): string
        getFirstParameter(name: string): string
        getFirstValue(): string
        getValues(): string[]
    }
}
