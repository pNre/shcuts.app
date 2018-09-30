import Vue, { VueConstructor, VNode } from 'vue';
import ICAL from 'ical.js';

class ContactField {
    public WFContactMultivalue: number;
    public WFContactProperty: number;
    public WFContactData: Uint8Array;
    public WFContactDataObject: ICAL.Component;

    public get fullName(): string | null {
        return this.WFContactDataObject.getFirstPropertyValue('fn');
    }

    public get telephoneNumber(): string | null {
        return this.WFContactDataObject.getFirstPropertyValue('tel');
    }

    constructor(source: any) {
        this.WFContactData = source.WFContactData,
        this.WFContactProperty = source.WFContactProperty;
        this.WFContactMultivalue = source.WFContactMultivalue;
        const data = ICAL.parse(new TextDecoder('utf-8').decode(this.WFContactData));
        this.WFContactDataObject = new ICAL.Component(data);
    }

    public description(): string {
        return [this.fullName, this.telephoneNumber]
            .filter((x) => x)
            .map((x) => x!.trim())
            .join(', ');
    }
}

export class ContactFieldValue {
    public WFContactFieldValues: ContactField[];

    constructor(source: any) {
        this.WFContactFieldValues = source.WFContactFieldValues.map((x: any) => new ContactField(x));
    }

    public description(): string {
        return this.WFContactFieldValues.map((x) => x.description).join('\n');
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                const mapContact = (contact: ContactField) => createElement('span', { class: 'label' }, [contact.description()]);
                return createElement('div', this.WFContactFieldValues.map(mapContact));
            },
        });
    }
}
