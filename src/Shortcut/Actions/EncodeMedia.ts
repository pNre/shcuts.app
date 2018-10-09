import { Action } from '@/Shortcut/Action';
import { DefaultContent, DefaultContentProviding } from '@/Shortcut/DefaultContentProviding';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Value, NewValue } from '@/Shortcut/Value';

export default class EncodeMediaAction extends Action implements DefaultContentProviding {
    public WFMediaAudioOnly?: Value;
    public WFMediaAudioFormat?: Value;
    public WFMediaSize?: Value;
    public WFMediaSpeed?: Value;
    public WFMetadataTitle?: Value;
    public WFMetadataArtist?: Value;
    public WFMetadataAlbum?: Value;
    public WFMetadataGenre?: Value;
    public WFMetadataYear?: Value;
    public WFMetadataArtwork?: Value;

    constructor(object: any) {
        super(() => 'Encode Media', object, () => ActionComponent, () => '📀');
        this.WFMediaAudioOnly = NewValue(object.WFWorkflowActionParameters.WFMediaAudioOnly);
        this.WFMediaAudioFormat = NewValue(object.WFWorkflowActionParameters.WFMediaAudioFormat);
        this.WFMediaSize = NewValue(object.WFWorkflowActionParameters.WFMediaSize);
        this.WFMediaSpeed = NewValue(object.WFWorkflowActionParameters.WFMediaSpeed);
        this.WFMetadataTitle = NewValue(object.WFWorkflowActionParameters.WFMetadataTitle);
        this.WFMetadataArtist = NewValue(object.WFWorkflowActionParameters.WFMetadataArtist);
        this.WFMetadataAlbum = NewValue(object.WFWorkflowActionParameters.WFMetadataAlbum);
        this.WFMetadataGenre = NewValue(object.WFWorkflowActionParameters.WFMetadataGenre);
        this.WFMetadataYear = NewValue(object.WFWorkflowActionParameters.WFMetadataYear);
        this.WFMetadataArtwork = NewValue(object.WFWorkflowActionParameters.WFMetadataArtwork);
    }

    public defaultContent(): DefaultContent[] {
        const content: DefaultContent[] = [];

        if (this.WFMediaAudioOnly) {
            content.push({
                title: 'Audio Only',
                content: null,
                componentConstructor: () => this.WFMediaAudioOnly!.componentConstructor(),
            });
        }

        if (this.WFMediaAudioFormat) {
            content.push({
                title: 'Format',
                content: null,
                componentConstructor: () => this.WFMediaAudioFormat!.componentConstructor(),
            });
        }

        if (this.WFMediaSize) {
            content.push({
                title: 'Size',
                content: null,
                componentConstructor: () => this.WFMediaSize!.componentConstructor(),
            });
        }

        if (this.WFMediaSpeed) {
            content.push({
                title: 'Speed',
                content: null,
                componentConstructor: () => this.WFMediaSpeed!.componentConstructor(),
            });
        }

        if (this.WFMetadataTitle) {
            content.push({
                title: 'Title',
                content: null,
                componentConstructor: () => this.WFMetadataTitle!.componentConstructor(),
            });
        }

        if (this.WFMetadataArtist) {
            content.push({
                title: 'Artist',
                content: null,
                componentConstructor: () => this.WFMetadataArtist!.componentConstructor(),
            });
        }

        if (this.WFMetadataAlbum) {
            content.push({
                title: 'Album',
                content: null,
                componentConstructor: () => this.WFMetadataAlbum!.componentConstructor(),
            });
        }

        if (this.WFMetadataGenre) {
            content.push({
                title: 'Genre',
                content: null,
                componentConstructor: () => this.WFMetadataGenre!.componentConstructor(),
            });
        }

        if (this.WFMetadataYear) {
            content.push({
                title: 'Year',
                content: null,
                componentConstructor: () => this.WFMetadataYear!.componentConstructor(),
            });
        }

        if (this.WFMetadataArtwork) {
            content.push({
                title: 'Artwork',
                content: null,
                componentConstructor: () => this.WFMetadataArtwork!.componentConstructor(),
            });
        }

        return content;
    }
}
