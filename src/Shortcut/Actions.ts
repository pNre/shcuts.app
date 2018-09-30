import ActionComponent from '@/Components/Actions/ActionComponent.vue';
import { Action } from '@/Shortcut/Action';
import ListAction from '@/Shortcut/Actions/List';
import SetVariableAction from '@/Shortcut/Actions/SetVariable';
import AskAction from '@/Shortcut/Actions/Ask';
import DateAction from '@/Shortcut/Actions/Date';
import AdjustDateAction from '@/Shortcut/Actions/AdjustDate';
import AddNewReminderAction from '@/Shortcut/Actions/AddNewReminder';
import GetCurrentSongAction from '@/Shortcut/Actions/GetCurrentSong';
import NumberAction from '@/Shortcut/Actions/Number';
import NumberRandomAction from '@/Shortcut/Actions/NumberRandom';
import DelayAction from '@/Shortcut/Actions/Delay';
import PropertiesMusicAction from '@/Shortcut/Actions/PropertiesMusic';
import GetVariableAction from '@/Shortcut/Actions/GetVariable';
import OpenAppAction from '@/Shortcut/Actions/OpenApp';
import TextCombineAction from '@/Shortcut/Actions/TextCombine';
import SearchiTunesAction from '@/Shortcut/Actions/SearchiTunes';
import PlayMusicAction from '@/Shortcut/Actions/PlayMusic';
import ConditionalAction from '@/Shortcut/Actions/Conditional';
import ShowResultAction from '@/Shortcut/Actions/ShowResult';
import FlashlightAction from '@/Shortcut/Actions/Flashlight';
import DetectTextAction from '@/Shortcut/Actions/DetectText';
import TextChangeCaseAction from '@/Shortcut/Actions/TextChangeCase';
import TextSplitAction from '@/Shortcut/Actions/TextSplit';
import GetTextAction from '@/Shortcut/Actions/GetText';
import DetectDictionaryAction from '@/Shortcut/Actions/DetectDictionary';
import RepeatEachAction from '@/Shortcut/Actions/RepeatEach';
import GetValueForKey from '@/Shortcut/Actions/GetValueForKey';
import SpeakTextAction from '@/Shortcut/Actions/SpeakText';
import RunWorkflowAction from '@/Shortcut/Actions/RunWorkflow';
import AppendVariableAction from '@/Shortcut/Actions/AppendVariable';
import MathAction from '@/Shortcut/Actions/Math';
import SetClipboardAction from '@/Shortcut/Actions/SetClipboard';
import RepeatAction from '@/Shortcut/Actions/Repeat';
import PhoneNumberAction from '@/Shortcut/Actions/PhoneNumber';
import PayAction from '@/Shortcut/Actions/Pay';
import CountAction from '@/Shortcut/Actions/Count';
import SelectContactsAction from '@/Shortcut/Actions/SelectContacts';
import TextReplaceAction from '@/Shortcut/Actions/TextReplace';
import RoundAction from '@/Shortcut/Actions/Round';
import FormatNumberAction from '@/Shortcut/Actions/FormatNumber';
import FormatDateAction from '@/Shortcut/Actions/FormatDate';
import SendMessageAction from '@/Shortcut/Actions/SendMessage';
import ChooseFromMenuAction from '@/Shortcut/Actions/ChooseFromMenu';
import ExitAction from '@/Shortcut/Actions/Exit';
import VibrateAction from '@/Shortcut/Actions/Vibrate';
import StatisticsAction from '@/Shortcut/Actions/Statistics';
import ScanBarcodeAction from '@/Shortcut/Actions/ScanBarcode';
import URLAction from '@/Shortcut/Actions/URL';
import DownloadURLAction from '@/Shortcut/Actions/DownloadURL';
import ShowWebPageAction from '@/Shortcut/Actions/ShowWebPage';
import GetItemFromListAction from '@/Shortcut/Actions/GetItemFromList';
import CommentAction from '@/Shortcut/Actions/Comment';
import OpenURLAction from '@/Shortcut/Actions/OpenURL';
import GetBatteryLevelAction from '@/Shortcut/Actions/GetBatteryLevel';
import GetDeviceDetailsAction from '@/Shortcut/Actions/GetDeviceDetails';
import GetWifiAction from '@/Shortcut/Actions/GetWifi';
import AlertAction from '@/Shortcut/Actions/Alert';
import GetIPAddressAction from '@/Shortcut/Actions/GetIPAddress';
import NothingAction from '@/Shortcut/Actions/Nothing';
import ChromeOpenURLAction from '@/Shortcut/Actions/ChromeOpenURL';
import GetArticleAction from '@/Shortcut/Actions/GetArticle';
import PropertiesArticleAction from '@/Shortcut/Actions/PropertiesArticle';
import PocketGetAction from '@/Shortcut/Actions/PocketGet';
import NotificationAction from '@/Shortcut/Actions/Notification';
import GetMyWorkflowsAction from '@/Shortcut/Actions/GetMyWorkflows';
import MakeZipAction from '@/Shortcut/Actions/MakeZip';
import DocumentPickerSaveAction from '@/Shortcut/Actions/DocumentPickerSave';

export class UnknownAction extends Action {
    constructor(object: any) {
        super(() => object.WFWorkflowActionIdentifier, object, () => ActionComponent);
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
    'is.workflow.actions.appendvariable': AppendVariableAction,
    'is.workflow.actions.setclipboard': SetClipboardAction,
    'is.workflow.actions.addnewreminder': AddNewReminderAction,
    'is.workflow.actions.getcurrentsong': GetCurrentSongAction,
    'is.workflow.actions.number': NumberAction,
    'is.workflow.actions.format.number': FormatNumberAction,
    'is.workflow.actions.number.random': NumberRandomAction,
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
    'is.workflow.actions.text.replace': TextReplaceAction,
    'is.workflow.actions.gettext': GetTextAction,
    'is.workflow.actions.detect.dictionary': DetectDictionaryAction,
    'is.workflow.actions.repeat.each': RepeatEachAction,
    'is.workflow.actions.getvalueforkey': GetValueForKey,
    'is.workflow.actions.speaktext': SpeakTextAction,
    'is.workflow.actions.runworkflow': RunWorkflowAction,
    'is.workflow.actions.math': MathAction,
    'is.workflow.actions.repeat.count': RepeatAction,
    'is.workflow.actions.phonenumber': PhoneNumberAction,
    'is.workflow.actions.venmo.pay': PayAction,
    'is.workflow.actions.count': CountAction,
    'is.workflow.actions.selectcontacts': SelectContactsAction,
    'is.workflow.actions.round': RoundAction,
    'is.workflow.actions.sendmessage': SendMessageAction,
    'is.workflow.actions.choosefrommenu': ChooseFromMenuAction,
    'is.workflow.actions.exit': ExitAction,
    'is.workflow.actions.vibrate': VibrateAction,
    'is.workflow.actions.statistics': StatisticsAction,
    'is.workflow.actions.scanbarcode': ScanBarcodeAction,
    'is.workflow.actions.url': URLAction,
    'is.workflow.actions.downloadurl': DownloadURLAction,
    'is.workflow.actions.showwebpage': ShowWebPageAction,
    'is.workflow.actions.getitemfromlist': GetItemFromListAction,
    'is.workflow.actions.comment': CommentAction,
    'is.workflow.actions.format.date': FormatDateAction,
    'is.workflow.actions.openurl': OpenURLAction,
    'is.workflow.actions.getbatterylevel': GetBatteryLevelAction,
    'is.workflow.actions.getdevicedetails': GetDeviceDetailsAction,
    'is.workflow.actions.getwifi': GetWifiAction,
    'is.workflow.actions.alert': AlertAction,
    'is.workflow.actions.getipaddress': GetIPAddressAction,
    'is.workflow.actions.nothing': NothingAction,
    'com.google.chrome.ios.openurl': ChromeOpenURLAction,
    'is.workflow.actions.getarticle': GetArticleAction,
    'is.workflow.actions.properties.articles': PropertiesArticleAction,
    'is.workflow.actions.pocket.get': PocketGetAction,
    'is.workflow.actions.notification': NotificationAction,
    'is.workflow.actions.getmyworkflows': GetMyWorkflowsAction,
    'is.workflow.actions.makezip': MakeZipAction,
    'is.workflow.actions.documentpicker.save': DocumentPickerSaveAction,
} as { [key: string]: ActionConstructor };

export {Actions};
