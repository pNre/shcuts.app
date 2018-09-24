import uuidv4 from 'uuid/v4';
import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Action, ActionComponentDescriptor } from '@/Workflow/Action';
import ListAction from '@/Workflow/Actions/List';
import SetVariableAction from '@/Workflow/Actions/SetVariable';
import AskAction from '@/Workflow/Actions/Ask';
import DateAction from '@/Workflow/Actions/Date';
import AdjustDateAction from '@/Workflow/Actions/AdjustDate';
import AddNewReminderAction from '@/Workflow/Actions/AddNewReminder';
import GetCurrentSongAction from '@/Workflow/Actions/GetCurrentSong';
import NumberAction from '@/Workflow/Actions/Number';
import DelayAction from '@/Workflow/Actions/Delay';
import PropertiesMusicAction from '@/Workflow/Actions/PropertiesMusic';
import GetVariableAction from '@/Workflow/Actions/GetVariable';
import OpenAppAction from '@/Workflow/Actions/OpenApp';
import TextCombineAction from '@/Workflow/Actions/TextCombine';
import SearchiTunesAction from '@/Workflow/Actions/SearchiTunes';
import PlayMusicAction from '@/Workflow/Actions/PlayMusic';
import ConditionalAction from '@/Workflow/Actions/Conditional';
import ShowResultAction from '@/Workflow/Actions/ShowResult';
import FlashlightAction from '@/Workflow/Actions/Flashlight';
import DetectTextAction from '@/Workflow/Actions/DetectText';
import TextChangeCaseAction from '@/Workflow/Actions/TextChangeCase';
import TextSplitAction from '@/Workflow/Actions/TextSplit';
import GetTextAction from '@/Workflow/Actions/GetText';
import DetectDictionaryAction from '@/Workflow/Actions/DetectDictionary';
import RepeatEachAction from '@/Workflow/Actions/RepeatEach';
import GetValueForKey from '@/Workflow/Actions/GetValueForKey';
import SpeakTextAction from '@/Workflow/Actions/SpeakText';
import RunWorkflowAction from '@/Workflow/Actions/RunWorkflow';

export class UnknownAction implements Action {
    public component: ActionComponentDescriptor;

    constructor(object: any) {
        this.component = {
            key: uuidv4(),
            name: object.WFWorkflowActionIdentifier,
            componentConstructor: () => ActionComponent,
        };
    }
}

interface ActionConstructor {
    new(object: any): Action;
}

const Actions = {
    'is.workflow.actions.list': ListAction,
    'is.workflow.actions.ask': AskAction,
    'is.workflow.actions.date': DateAction,
    'is.workflow.actions.adjustdate': AdjustDateAction,
    'is.workflow.actions.setvariable': SetVariableAction,
    'is.workflow.actions.getvariable': GetVariableAction,
    'is.workflow.actions.addnewreminder': AddNewReminderAction,
    'is.workflow.actions.getcurrentsong': GetCurrentSongAction,
    'is.workflow.actions.number': NumberAction,
    'is.workflow.actions.delay': DelayAction,
    'is.workflow.actions.properties.music': PropertiesMusicAction,
    'is.workflow.actions.openapp': OpenAppAction,
    'is.workflow.actions.searchitunes': SearchiTunesAction,
    'is.workflow.actions.playmusic': PlayMusicAction,
    'is.workflow.actions.conditional': ConditionalAction,
    'is.workflow.actions.showresult': ShowResultAction,
    'is.workflow.actions.flashlight': FlashlightAction,
    'is.workflow.actions.detect.text': DetectTextAction,
    'is.workflow.actions.text.combine': TextCombineAction,
    'is.workflow.actions.text.changecase': TextChangeCaseAction,
    'is.workflow.actions.text.split': TextSplitAction,
    'is.workflow.actions.gettext': GetTextAction,
    'is.workflow.actions.detect.dictionary': DetectDictionaryAction,
    'is.workflow.actions.repeat.each': RepeatEachAction,
    'is.workflow.actions.getvalueforkey': GetValueForKey,
    'is.workflow.actions.speaktext': SpeakTextAction,
    'is.workflow.actions.runworkflow': RunWorkflowAction,
} as { [key: string]: ActionConstructor };

export {Actions};
