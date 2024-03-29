import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {DynamicDialogModule} from 'primeng/dynamicdialog';


import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {ChipModule} from 'primeng/chip';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SkeletonModule} from 'primeng/skeleton';
import {SidebarModule} from 'primeng/sidebar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

import {AppCodeModule} from './blocks/app-code/app.code.component';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';
import {AppConfigComponent} from './app.config.component';
import {AppRightpanelComponent} from './app.rightpanel.component';
import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusComponent} from './demo/view/menus/menus.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {IconsComponent} from './utilities/icons.component';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppInvoiceComponent} from './pages/app.invoice.component';
import {AppHelpComponent} from './pages/app.help.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {BlocksComponent} from './blocks/blocks/blocks.component';
import {BlockViewer} from './blocks/blockviewer/blockviewer.component';

import {CountryService} from './demo/service/countryservice';
import {CustomerService} from './demo/service/customerservice';
import {EventService} from './demo/service/eventservice';
import {IconService} from './demo/service/iconservice';
import {NodeService} from './demo/service/nodeservice';
import {PhotoService} from './demo/service/photoservice';
import {ProductService} from './demo/service/productservice';
import {MenuService} from './app.menu.service';
import {ConfigService} from './demo/service/app.config.service';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import {DateComponent} from './proje/sidebarelements/date/date.component';
import {LoginComponent} from './proje/login/login.component';
import {RegisterComponent} from './proje/register/register.component';
import {LeftbarComponent} from './proje/leftbar/leftbar.component';
import {MessageService} from 'primeng/api';
import {NavbarComponent} from './proje/navbar/navbar.component';
import {SplashScreenComponent} from './proje/splash-screen/splash-screen.component';
import {DragDropModule} from 'primeng/dragdrop';
import {MainPageComponent} from './proje/main/mainPage.component';
import {RightbarComponent} from './proje/rightbar/rightbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {CheckboxComponent} from './proje/sidebarelements/checkbox/checkbox.component';
import {MailComponent} from './proje/sidebarelements/mail/mail.component';
import {TextfieldComponent} from './proje/sidebarelements/textfield/textfield.component';
import {DividerComponent} from './proje/sidebarelements/divider/divider.component';
import {FileUploadComponent} from './proje/sidebarelements/file-upload/file-upload.component';
import {PasswordComponent} from './proje/sidebarelements/password/password.component';
import {TextfieldelementComponent} from './proje/middleelements/textfieldelement/textfieldelement.component';
import {CheckboxelementComponent} from './proje/middleelements/checkboxelement/checkboxelement.component';
import {DateelementComponent} from './proje/middleelements/dateelement/dateelement.component';
import {DatetimeelementComponent} from './proje/middleelements/datetimeelement/datetimeelement.component';
import {NumberComponent} from './proje/sidebarelements/number/number.component';
import {FileelementComponent} from './proje/middleelements/fileelement/fileelement.component';
import {NumberelementComponent} from './proje/middleelements/numberelement/numberelement.component';
import {PasswordelementComponent} from './proje/middleelements/passwordelement/passwordelement.component';
import {RangeelementComponent} from './proje/middleelements/rangeelement/rangeelement.component';
import {MailelementComponent} from './proje/middleelements/mailelement/mailelement.component';
import {SharedDataService} from './demo/service/sharedataservice';
import {ProfileComponent} from './proje/profile/profile.component';
import {DatetimeComponent} from './proje/sidebarelements/datetime/datetime.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CollapsedRightBarService} from './demo/service/collapsedRightBarService';
import {SaveService} from './demo/service/saveservice';
import {GetElementDetailsService} from './demo/service/getElementDetailsService';
import {LangSwitcherComponent} from './proje/lang-switcher/lang-switcher.component';
import {SecondaryNavComponent} from './proje/secondary-nav/secondary-nav.component';
import {SettingsComponent} from './proje/settings/settings.component';
import {PublishComponent} from './proje/publish/publish.component';
import {SpeedDialModule} from 'primeng/speeddial';
import {ShareComponent} from './proje/publish/publishcomponents/sharecomponent/share.component';
import {EmailComponent} from './proje/publish/publishcomponents/emailcomponent/email.component';
import {PdfComponent} from './proje/publish/publishcomponents/pdfcomponent/pdf.component';
import {FormsettingsComponent} from './proje/settings/settingscomponent/formsettings/formsettings.component';
import {EmailsettingsComponent} from './proje/settings/settingscomponent/emailsettings/emailsettings.component';
import {FormNameService} from './demo/service/formnameservice';
import {MiddleElementsService} from './demo/service/middleelementsservice';
import {NoItemService} from './demo/service/noitemservice';
import {ChangeDateService} from './demo/service/changedateservice';
import {LandingComponent} from './proje/landing/landing.component';
import {FormComponent} from './proje/form/form.component';
import {HomeProfileComponent} from './proje/home-profile/home-profile.component';
import {ProfilnavComponent} from './proje/profilnav/profilnav.component';
import {CommunicationComponent} from './proje/communication/communication.component';
import {UserGuideComponent} from './proje/user-guide/user-guide.component';
import { FavoritesComponent } from './proje/home-profile/profile-sidebar/favorites/favorites.component';
import { ArchiveComponent } from './proje/home-profile/profile-sidebar/archive/archive.component';
import {AllformsComponent} from './proje/home-profile/profile-sidebar/allforms/allforms.component';
import {ReportComponent} from './proje/home-profile/profile-sidebar/report/report.component';
import {TrashComponent} from './proje/home-profile/profile-sidebar/trash/trash.component';
import {CheckboxService} from './demo/service/elementservice/checkbox.service';
import { FormcontentComponent } from './proje/formcontent/formcontent.component';
import { CheckboxcontentComponent } from './proje/formcontentelements/checkboxcontent/checkboxcontent.component';
import { DatecontentComponent } from './proje/formcontentelements/datecontent/datecontent.component';
import { DatetimecontentComponent } from './proje/formcontentelements/datetimecontent/datetimecontent.component';
import { FilecontentComponent } from './proje/formcontentelements/filecontent/filecontent.component';
import { MailcontentComponent } from './proje/formcontentelements/mailcontent/mailcontent.component';
import { NumbercontentComponent } from './proje/formcontentelements/numbercontent/numbercontent.component';
import { PasswordcontentComponent } from './proje/formcontentelements/passwordcontent/passwordcontent.component';
import { RangecontentComponent } from './proje/formcontentelements/rangecontent/rangecontent.component';
import { TextfieldcontentComponent } from './proje/formcontentelements/textfieldcontent/textfieldcontent.component';
import {ConfirmationService} from 'primeng/api';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

export function httpTranslateLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        DynamicDialogModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        ChipModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        ImageModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SkeletonModule,
        SidebarModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TieredMenuModule,
        TimelineModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
        AppCodeModule,
        SidebarModule,
        DragDropModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoaderFactory,
                deps: [HttpClient]
            }
        }),
        SpeedDialModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppRightpanelComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppConfigComponent,
        AppTopBarComponent,
        AppFooterComponent,
        DashboardDemoComponent,
        FormLayoutDemoComponent,
        FloatLabelDemoComponent,
        InvalidStateDemoComponent,
        InputDemoComponent,
        ButtonDemoComponent,
        TableDemoComponent,
        ListDemoComponent,
        TreeDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MediaDemoComponent,
        MenusComponent,
        MessagesDemoComponent,
        MessagesDemoComponent,
        MiscDemoComponent,
        ChartsDemoComponent,
        EmptyDemoComponent,
        FileDemoComponent,
        DocumentationComponent,
        IconsComponent,
        AppCrudComponent,
        AppCalendarComponent,
        AppLoginComponent,
        AppInvoiceComponent,
        AppHelpComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppTimelineDemoComponent,
        AppAccessdeniedComponent,
        BlocksComponent,
        BlockViewer,
        LoginComponent,
        RegisterComponent,
        LeftbarComponent,
        NavbarComponent,
        SplashScreenComponent,
        MainPageComponent,
        RightbarComponent,
        DateComponent,
        CheckboxComponent,
        MailComponent,
        TextfieldComponent,
        DividerComponent,
        FileUploadComponent,
        PasswordComponent,
        TextfieldelementComponent,
        CheckboxelementComponent,
        DateelementComponent,
        DatetimeelementComponent,
        NumberComponent,
        FileelementComponent,
        NumberelementComponent,
        PasswordelementComponent,
        RangeelementComponent,
        MailelementComponent,
        ProfileComponent,
        DatetimeComponent,
        LangSwitcherComponent,
        SecondaryNavComponent,
        SettingsComponent,
        PublishComponent,
        FormsettingsComponent,
        EmailsettingsComponent,
        ShareComponent,
        EmailComponent,
        PdfComponent,
        LandingComponent,
        FormComponent,
        HomeProfileComponent,
        ProfilnavComponent,
        CommunicationComponent,
        UserGuideComponent,
        FavoritesComponent,
        ArchiveComponent,
        AllformsComponent,
        ReportComponent,
        TrashComponent,
        FormcontentComponent,
        CheckboxcontentComponent,
        DatecontentComponent,
        DatetimecontentComponent,
        FilecontentComponent,
        MailcontentComponent,
        NumbercontentComponent,
        PasswordcontentComponent,
        RangecontentComponent,
        TextfieldcontentComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}, { provide: 'url', useValue: 'https://mergenform.herokuapp.com/' },
        CheckboxService,
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService, AppMainComponent, ConfigService,
        MessageService, SharedDataService, CollapsedRightBarService, SaveService,
        GetElementDetailsService, FormNameService, MiddleElementsService, NoItemService,
        ChangeDateService, ConfirmationService
    ],
    bootstrap: [AppComponent],
    exports: [
    ]
})
export class AppModule {
}

