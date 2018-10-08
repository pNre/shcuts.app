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
import DetectPhoneNumberAction from '@/Shortcut/Actions/DetectPhoneNumber';
import ChooseFromListAction from '@/Shortcut/Actions/ChooseFromList';
import MobilePhoneCallAction from '@/Shortcut/Actions/MobilePhoneCall';
import PropertiesContactAction from '@/Shortcut/Actions/PropertiesContact';
import FilterContactsAction from '@/Shortcut/Actions/FilterContacts';
import FacetimeAction from '@/Shortcut/Actions/Facetime';
import WhatsAppSendAction from '@/Shortcut/Actions/WhatsAppSend';
import WhatsAppOpenInAction from '@/Shortcut/Actions/WhatsAppOpenIn';
import TakePhotoAction from '@/Shortcut/Actions/TakePhoto';
import TakeVideoAction from '@/Shortcut/Actions/TakeVideo';
import ContactsAction from '@/Shortcut/Actions/Contacts';
import WifiSetAction from '@/Shortcut/Actions/WifiSet';
import CellularDataSetAction from '@/Shortcut/Actions/CellularDataSet';
import BluetoothSetAction from '@/Shortcut/Actions/BluetoothSet';
import AirplaneModeSetAction from '@/Shortcut/Actions/AirplaneModeSet';
import SetBrightnessAction from '@/Shortcut/Actions/SetBrightness';
import LowPowerModeSetAction from '@/Shortcut/Actions/LowPowerModeSet';
import PauseMusicAction from '@/Shortcut/Actions/PauseMusic';
import ShareAction from '@/Shortcut/Actions/Share';
import SaveToCameraRollAction from '@/Shortcut/Actions/SaveToCameraRoll';
import SearchMapsAction from '@/Shortcut/Actions/SearchMaps';
import FilterLocationsAction from '@/Shortcut/Actions/FilterLocations';
import FileDeleteAction from '@/Shortcut/Actions/FileDelete';
import DocumentPickerOpenAction from '@/Shortcut/Actions/DocumentPickerOpen';
import SetItemNameAction from '@/Shortcut/Actions/SetItemName';
import FileAppendAction from '@/Shortcut/Actions/FileAppend';
import GenerateBarcodeAction from '@/Shortcut/Actions/GenerateBarcode';
import PreviewDocumentAction from '@/Shortcut/Actions/PreviewDocument';
import DetectLinkAction from '@/Shortcut/Actions/DetectLink';
import DictionaryAction from '@/Shortcut/Actions/Dictionary';
import GetMarkdownFromRichTextAction from '@/Shortcut/Actions/GetMarkdownFromRichText';
import GetClipboardAction from '@/Shortcut/Actions/GetClipboard';
import TextMatchAction from '@/Shortcut/Actions/TextMatch';
import RemoveRemindersAction from '@/Shortcut/Actions/RemoveReminders';
import FilterRemindersAction from '@/Shortcut/Actions/FilterReminders';
import PropertiesRemindersAction from '@/Shortcut/Actions/PropertiesReminders';
import GetHTMLFromRichTextAction from '@/Shortcut/Actions/GetHTMLFromRichText';
import GetURLComponentAction from '@/Shortcut/Actions/GetURLComponent';
import UnzipAction from '@/Shortcut/Actions/Unzip';
import GetWebPageContentsAction from '@/Shortcut/Actions/GetWebPageContents';
import DetectImagesAction from '@/Shortcut/Actions/DetectImages';
import URLEncodeAction from '@/Shortcut/Actions/URLEncode';
import GetPlaylistAction from '@/Shortcut/Actions/GetPlaylist';
import GetTravelTimeAction from '@/Shortcut/Actions/GetTravelTime';
import GetUpcomingEventsAction from '@/Shortcut/Actions/GetUpcomingEvents';
import PropertiesCalendarEventsAction from '@/Shortcut/Actions/PropertiesCalendarEvents';
import GetDirectionsAction from '@/Shortcut/Actions/GetDirections';
import HandoffAction from '@/Shortcut/Actions/Handoff';
import DictateTextAction from '@/Shortcut/Actions/DictateText';
import HealthQuantityAction from '@/Shortcut/Actions/HealthQuantityLog';
import UserActivityOpenAction from '@/Shortcut/Actions/UserActivityOpen';
import SendEmailAction from '@/Shortcut/Actions/SendEmail';
import FilterCalendarEventsAction from '@/Shortcut/Actions/FilterCalendarEvents';
import AddMusicToUpNextAction from '@/Shortcut/Actions/AddMusicToUpNext';
import FilterMusicAction from '@/Shortcut/Actions/FilterMusic';
import RSSAction from '@/Shortcut/Actions/RSS';
import TextTranslateAction from '@/Shortcut/Actions/TextTranslate';
import SetVolumeAction from '@/Shortcut/Actions/SetVolume';
import InstapaperGetAction from '@/Shortcut/Actions/InstapaperGet';
import DetectAddressAction from '@/Shortcut/Actions/DetectAddress';
import WaitToReturnAction from '@/Shortcut/Actions/WaitToReturn';
import SearchLocalBusinessesAction from '@/Shortcut/Actions/SearchLocalBusinesses';

export class UnknownAction extends Action {
    constructor(object: any) {
        super(() => object.WFWorkflowActionIdentifier, object, () => ActionComponent, () => '😶');
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
    'is.workflow.actions.detect.phonenumber': DetectPhoneNumberAction,
    'is.workflow.actions.choosefromlist': ChooseFromListAction,
    'com.apple.mobilephone.call': MobilePhoneCallAction,
    'is.workflow.actions.properties.contacts': PropertiesContactAction,
    'is.workflow.actions.filter.contacts': FilterContactsAction,
    'com.apple.facetime.facetime': FacetimeAction,
    'net.whatsapp.WhatsApp.send': WhatsAppSendAction,
    'net.whatsapp.WhatsApp.openin': WhatsAppOpenInAction,
    'is.workflow.actions.takephoto': TakePhotoAction,
    'is.workflow.actions.takevideo': TakeVideoAction,
    'is.workflow.actions.contacts': ContactsAction,
    'is.workflow.actions.wifi.set': WifiSetAction,
    'is.workflow.actions.cellulardata.set': CellularDataSetAction,
    'is.workflow.actions.bluetooth.set': BluetoothSetAction,
    'is.workflow.actions.airplanemode.set': AirplaneModeSetAction,
    'is.workflow.actions.setbrightness': SetBrightnessAction,
    'is.workflow.actions.lowpowermode.set': LowPowerModeSetAction,
    'is.workflow.actions.pausemusic': PauseMusicAction,
    'is.workflow.actions.share': ShareAction,
    'is.workflow.actions.savetocameraroll': SaveToCameraRollAction,
    'is.workflow.actions.searchmaps': SearchMapsAction,
    'is.workflow.actions.filter.locations': FilterLocationsAction,
    'is.workflow.actions.file.delete': FileDeleteAction,
    'is.workflow.actions.documentpicker.open': DocumentPickerOpenAction,
    'is.workflow.actions.setitemname': SetItemNameAction,
    'is.workflow.actions.file.append': FileAppendAction,
    'is.workflow.actions.generatebarcode': GenerateBarcodeAction,
    'is.workflow.actions.previewdocument': PreviewDocumentAction,
    'is.workflow.actions.detect.link': DetectLinkAction,
    'is.workflow.actions.dictionary': DictionaryAction,
    'is.workflow.actions.getmarkdownfromrichtext': GetMarkdownFromRichTextAction,
    'is.workflow.actions.getclipboard': GetClipboardAction,
    'is.workflow.actions.text.match': TextMatchAction,
    'is.workflow.actions.removereminders': RemoveRemindersAction,
    'is.workflow.actions.filter.reminders': FilterRemindersAction,
    'is.workflow.actions.properties.reminders': PropertiesRemindersAction,
    'is.workflow.actions.gethtmlfromrichtext': GetHTMLFromRichTextAction,
    'is.workflow.actions.geturlcomponent': GetURLComponentAction,
    'is.workflow.actions.unzip': UnzipAction,
    'is.workflow.actions.getwebpagecontents': GetWebPageContentsAction,
    'is.workflow.actions.detect.images': DetectImagesAction,
    'is.workflow.actions.urlencode': URLEncodeAction,
    'is.workflow.actions.get.playlist': GetPlaylistAction,
    'is.workflow.actions.gettraveltime': GetTravelTimeAction,
    'is.workflow.actions.getupcomingevents': GetUpcomingEventsAction,
    'is.workflow.actions.properties.calendarevents': PropertiesCalendarEventsAction,
    'is.workflow.actions.getdirections': GetDirectionsAction,
    'is.workflow.actions.handoff': HandoffAction,
    'is.workflow.actions.dictatetext': DictateTextAction,
    'is.workflow.actions.health.quantity.log': HealthQuantityAction,
    'is.workflow.actions.useractivity.open': UserActivityOpenAction,
    'is.workflow.actions.sendemail': SendEmailAction,
    'is.workflow.actions.filter.calendarevents': FilterCalendarEventsAction,
    'is.workflow.actions.addmusictoupnext': AddMusicToUpNextAction,
    'is.workflow.actions.filter.music': FilterMusicAction,
    'is.workflow.actions.rss': RSSAction,
    'is.workflow.actions.text.translate': TextTranslateAction,
    'is.workflow.actions.setvolume': SetVolumeAction,
    'is.workflow.actions.instapaper.get': InstapaperGetAction,
    'is.workflow.actions.detect.address': DetectAddressAction,
    'is.workflow.actions.waittoreturn': WaitToReturnAction,
    'is.workflow.actions.searchlocalbusinesses': SearchLocalBusinessesAction,
} as { [key: string]: ActionConstructor };

export {Actions};
