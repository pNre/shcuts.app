import Vue, { VueConstructor, VNode } from 'vue';
import { NewValue, Value } from '@/Shortcut/Value';
import ContentPredicateTableTemplateComponent from '@/Components/Values/ContentPredicateTableTemplateComponent.vue';

enum ContentPredicateTemplateOperator {
    IsBefore = 0,
    IsAfter = 2,
    Is = 4,
    IsNot = 5,
    BeginsWith = 8,
    EndsWith = 9,
    Contains = 99,
    DoesNotContain = 999,
    IsInTheNext = 1000,
    IsInTheLast = 1001,
    IsToday = 1002,
    IsBetween = 1003,
}

enum ContentPredicateTemplateUnit {
    Days = 16,
    Months = 8,
    Years = 4,
}

enum ContentPredicatePropertyType {
    Unit,
    Bool,
    Number,
    Phone,
    String,
    Date,
    Enumeration,
}

class ContentPredicateProperty {
    public name: string;
    public type: ContentPredicatePropertyType;
    constructor(name: string, type: ContentPredicatePropertyType) {
        this.name = name;
        this.type = type;
    }
}

const ContentPredicateProperties: { [key: string]: ContentPredicateProperty } = {
    'Group': new ContentPredicateProperty('Group', ContentPredicatePropertyType.Enumeration),
    'First Name': new ContentPredicateProperty('First Name', ContentPredicatePropertyType.String),
    'Middle Name': new ContentPredicateProperty('Middle Name', ContentPredicatePropertyType.String),
    'Last Name': new ContentPredicateProperty('Last Name', ContentPredicatePropertyType.String),
    'Phone Number': new ContentPredicateProperty('Phone Number', ContentPredicatePropertyType.Phone),
    'Email Address': new ContentPredicateProperty('Email Address', ContentPredicatePropertyType.String),
    'Street Address': new ContentPredicateProperty('Street Address', ContentPredicatePropertyType.String),
    'URL': new ContentPredicateProperty('URL', ContentPredicatePropertyType.String),
    'Birthday': new ContentPredicateProperty('Birthday', ContentPredicatePropertyType.Date),
    'Has Photo': new ContentPredicateProperty('Has Photo', ContentPredicatePropertyType.Bool),
    'Has No Photo': new ContentPredicateProperty('Has No Photo', ContentPredicatePropertyType.Bool),
    'Prefix': new ContentPredicateProperty('Prefix', ContentPredicatePropertyType.String),
    'Suffix': new ContentPredicateProperty('Suffix', ContentPredicatePropertyType.String),
    'Nickname': new ContentPredicateProperty('Nickname', ContentPredicatePropertyType.String),
    'Phonetic First Name': new ContentPredicateProperty('Phonetic First Name', ContentPredicatePropertyType.String),
    'Phonetic Last Name': new ContentPredicateProperty('Phonetic Last Name', ContentPredicatePropertyType.String),
    'Phonetic Middle Name': new ContentPredicateProperty('Phonetic Middle Name', ContentPredicatePropertyType.String),
    'Company': new ContentPredicateProperty('Company', ContentPredicatePropertyType.String),
    'Job Title': new ContentPredicateProperty('Job Title', ContentPredicatePropertyType.String),
    'Department': new ContentPredicateProperty('Department', ContentPredicatePropertyType.String),
    'Notes': new ContentPredicateProperty('Notes', ContentPredicatePropertyType.String),
    'File Extension': new ContentPredicateProperty('File Extension', ContentPredicatePropertyType.String),
    'Creation Date': new ContentPredicateProperty('Creation Date', ContentPredicatePropertyType.Date),
    'Last Modified Date': new ContentPredicateProperty('Last Modified Date', ContentPredicatePropertyType.Date),
    'Name': new ContentPredicateProperty('Name', ContentPredicatePropertyType.String),
    'Title': new ContentPredicateProperty('Title', ContentPredicatePropertyType.String),
    'Completion Date': new ContentPredicateProperty('Completion Date', ContentPredicatePropertyType.Date),
    'Deadline': new ContentPredicateProperty('Deadline', ContentPredicatePropertyType.Date),
    'List': new ContentPredicateProperty('List', ContentPredicatePropertyType.Enumeration),
    'Priority': new ContentPredicateProperty('Priority', ContentPredicatePropertyType.Enumeration),
    'Is Completed': new ContentPredicateProperty('Is Completed', ContentPredicatePropertyType.Bool),
    'Is Not Completed': new ContentPredicateProperty('Is Not Completed', ContentPredicatePropertyType.Bool),
    'Has Alarms': new ContentPredicateProperty('Has Alarms', ContentPredicatePropertyType.Bool),
    'Has No Alarms': new ContentPredicateProperty('Has No Alarms', ContentPredicatePropertyType.Bool),
};

class ContentPredicateTemplate {
    public Operator: ContentPredicateTemplateOperator;
    public Removable: boolean;
    public Property: string;
    public VariableOverrides: { [key: string]: Value };

    public Unit?: ContentPredicateTemplateUnit;
    public Bool?: boolean;
    public Number?: number;
    public Phone?: string;
    public String?: string;
    public Date?: Date;
    public Enumeration?: any;

    constructor(source: any) {
        this.Operator = source.Operator;
        this.Unit = source.Unit;
        this.Removable = source.Removable;
        this.Property = source.Property;

        this.Bool = source.Bool;
        this.Number = source.Number;
        this.Phone = source.Phone;
        this.String = source.String;
        this.Date = source.Date;

        const overrides: { [key: string]: Value } = {};
        for (const key of Object.keys(source.VariableOverrides)) {
            const value = NewValue(source.VariableOverrides[key]);
            if (value) {
                overrides[key] = value;
            }
        }

        this.VariableOverrides = overrides;
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                const spacer = createElement('span', [' ']);
                const children: VNode[] = [];
                for (const child of this.children()) {
                    if (typeof child === 'string') {
                        children.push(createElement('span', child));
                    } else {
                        children.push(createElement(child));
                    }
                    children.push(spacer);
                }

                return createElement('span', children);
            },
        });
    }

    private valueForType(type: ContentPredicatePropertyType): any {
        switch (type) {
            case ContentPredicatePropertyType.Bool:
                if (typeof this.Bool === 'undefined') {
                    return this.VariableOverrides.boolValue;
                } else {
                    return this.Bool ? 'Yes' : 'No';
                }
            case ContentPredicatePropertyType.Number:
                if (this.Number) {
                    return this.Number.toLocaleString();
                }
                return NewValue(this.VariableOverrides.boolValue);
            case ContentPredicatePropertyType.Phone:
                return this.Phone || NewValue(this.VariableOverrides.phoneValue);
            case ContentPredicatePropertyType.String:
                return this.String || NewValue(this.VariableOverrides.stringValue);
            case ContentPredicatePropertyType.Date:
                if (this.Date) {
                    return this.Date!.toLocaleDateString();
                }
                return NewValue(this.VariableOverrides.dateValue);
            case ContentPredicatePropertyType.Enumeration:
                return this.Enumeration || NewValue(this.VariableOverrides.enumerationValue);
        }
    }

    private children(): Array<VueConstructor<Vue> | string> {
        const description: Array<VueConstructor<Vue> | string> = [this.Property];

        switch (this.Operator) {
            case ContentPredicateTemplateOperator.IsBefore:
                description.push('is before');
                break;
            case ContentPredicateTemplateOperator.IsAfter:
                description.push('is after');
                break;
            case ContentPredicateTemplateOperator.Is:
                description.push('is');
                break;
            case ContentPredicateTemplateOperator.IsNot:
                description.push('is not');
                break;
            case ContentPredicateTemplateOperator.BeginsWith:
                description.push('begins with');
                break;
            case ContentPredicateTemplateOperator.EndsWith:
                description.push('ends with');
                break;
            case ContentPredicateTemplateOperator.Contains:
                description.push('contains');
                break;
            case ContentPredicateTemplateOperator.DoesNotContain:
                description.push('does not contain');
                break;
            case ContentPredicateTemplateOperator.IsInTheNext:
                description.push('is in the next');
                break;
            case ContentPredicateTemplateOperator.IsInTheLast:
                description.push('is in the last');
                break;
            case ContentPredicateTemplateOperator.IsToday:
                description.push('is today');
                break;
            case ContentPredicateTemplateOperator.IsBetween:
                description.push('is between');
                break;
        }

        const value = this.valueForType(ContentPredicateProperties[this.Property].type);

        if (value && 'componentConstructor' in value) {
            description.push(value.componentConstructor());
        } else if (value) {
            description.push(value);

            if (ContentPredicateProperties[this.Property].type === ContentPredicatePropertyType.Date) {
                switch (this.Unit) {
                    case ContentPredicateTemplateUnit.Days:
                        description.push('days');
                        break;
                    case ContentPredicateTemplateUnit.Months:
                        description.push('months');
                        break;
                    case ContentPredicateTemplateUnit.Years:
                        description.push('years');
                        break;
                    default:
                        description.push(this.VariableOverrides.unitValue.componentConstructor());
                        break;
                }
            }
        } else {
            description.push('anything');
        }

        return description;
    }
}

enum FilterPrefix {
    Any = 0,
    All = 1,
}

export class ContentPredicateTableTemplate {
    public WFActionParameterFilterPrefix: FilterPrefix;
    public WFContentPredicateBoundedDate: boolean;
    public WFActionParameterFilterTemplates: ContentPredicateTemplate[];

    constructor(source: any) {
        this.WFActionParameterFilterPrefix = source.WFActionParameterFilterPrefix;
        this.WFContentPredicateBoundedDate = source.WFContentPredicateBoundedDate;
        this.WFActionParameterFilterTemplates = source.WFActionParameterFilterTemplates.map((x: any) => new ContentPredicateTemplate(x));
    }

    public get isEmpty(): boolean {
        return this.WFActionParameterFilterTemplates.length === 0;
    }

    public description(): string {
        return '';
    }

    public componentConstructor(): VueConstructor {
        return Vue.extend({
            render: (createElement) => {
                return createElement(ContentPredicateTableTemplateComponent, { props: { value: this } });
            },
        });
    }
}
