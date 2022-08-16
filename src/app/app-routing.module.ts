import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {LoginComponent} from './proje/login/login.component';
import {RegisterComponent} from './proje/register/register.component';
import {MainPageComponent} from './proje/main/mainPage.component';
import {ProfileComponent} from './proje/profile/profile.component';
import {SettingsComponent} from './proje/settings/settings.component';
import {PublishComponent} from './proje/publish/publish.component';
import {FormsettingsComponent} from './proje/settings/settingscomponent/formsettings/formsettings.component';
import {LandingComponent} from './proje/landing/landing.component';
import {HomeProfileComponent} from './proje/home-profile/home-profile.component';
import {CommunicationComponent} from "./proje/communication/communication.component";
import {UserGuideComponent} from "./proje/user-guide/user-guide.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: LandingComponent,
                children: []
            },
            {path: 'main', component: MainPageComponent},
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'home-profile', component: HomeProfileComponent},
            {path: 'settings', component: SettingsComponent},
            {path: 'publish', component: PublishComponent},
            {path: 'form', component: FormsettingsComponent},
            {path: 'profile', component: ProfileComponent},
            {path: 'communication', component: CommunicationComponent},
            {path: 'user-guide', component: UserGuideComponent},
            {path: '**', redirectTo: '/notfound'},
        ],  {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
