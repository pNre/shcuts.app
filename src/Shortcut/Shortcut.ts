import { parse } from 'plist';
import { Actions, UnknownAction } from '@/Shortcut/Actions';
import { ActionIndentationChange } from '@/Shortcut/Action';

export class Shortcut {

    public static fromSource(data: any): Shortcut | null {
        let plist;

        try {
            plist = parse(data.plist);
        } catch (_) {
            return null;
        }

        if (!plist) {
            return null;
        }

        return new Shortcut(data, plist);
    }

    private static inputContentItemClasses: { [key: string]: string } = {
        WFAppStoreAppContentItem: 'App Store apps',
        WFArticleContentItem: 'Articles',
        WFContactContentItem: 'Contacts',
        WFDateContentItem: 'Dates',
        WFEmailAddressContentItem: 'Email addresses',
        WFGenericFileContentItem: 'Files',
        WFImageContentItem: 'Images',
        WFiTunesProductContentItem: 'iTunes products',
        WFLocationContentItem: 'Locations',
        WFDCMapsLinkContentItem: 'Maps links',
        WFAVAssetContentItem: 'Media',
        WFPDFContentItem: 'PDFs',
        WFPhoneNumberContentItem: 'Phone numbers',
        WFRichTextContentItem: 'Rich text',
        WFSafariWebPageContentItem: 'Safari web pages',
        WFStringContentItem: 'Text',
        WFURLContentItem: 'URLs',
    };

    public id: string;
    public name: string;
    public description?: string;
    public actions: any[];
    public views?: number;
    public WFWorkflowClientRelease: string;
    public WFWorkflowClientVersion: string;
    public WFWorkflowInputContentItemClasses: string[];
    public WFWorkflowTypes: string[];
    public WFWorkflowIcon: any;

    public get WFWorkflowIconStartColor(): string {
        const color = this.WFWorkflowIcon.WFWorkflowIconStartColor.toString(16) as string;
        return color.slice(0, -2);
    }

    public get inputContentItemClassDescription(): string {
        if (!this.WFWorkflowTypes.includes('ActionExtension')) {
            return '';
        }

        if (this.WFWorkflowInputContentItemClasses.length === Object.entries(Shortcut.inputContentItemClasses).length) {
            return 'Anything';
        }

        return this.WFWorkflowInputContentItemClasses
            .map((x: string) => Shortcut.inputContentItemClasses[x])
            .join(', ');
    }

    private constructor(data: any, plist: any) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.views = data.views;
        this.WFWorkflowClientRelease = plist.WFWorkflowClientRelease;
        this.WFWorkflowClientVersion = plist.WFWorkflowClientVersion;
        this.WFWorkflowInputContentItemClasses = plist.WFWorkflowInputContentItemClasses;
        this.WFWorkflowTypes = plist.WFWorkflowTypes;
        this.WFWorkflowIcon = plist.WFWorkflowIcon;
        this.actions = plist.WFWorkflowActions.map((action: any) => {
            const actionType = Actions[action.WFWorkflowActionIdentifier as string];
            if (actionType) {
                return new actionType(action);
            } else {
                return new UnknownAction(action);
            }
        });

        let indentationLevel = 0;
        for (const action of this.actions) {
            if ('indentationChange' in action) {
                switch (action.indentationChange) {
                    case null:
                        action.indentationLevel = indentationLevel - 1;
                        break;
                    case ActionIndentationChange.In:
                        action.indentationLevel = indentationLevel;
                        indentationLevel += 1;
                        break;
                    case ActionIndentationChange.Out:
                        indentationLevel -= 1;
                        action.indentationLevel = indentationLevel;
                        break;
                }
            } else {
                action.indentationLevel = indentationLevel;
            }
        }
    }

}
