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
import {FormsettingsComponent} from './proje/formsettings/formsettings.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: MainPageComponent,
                children: [
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'profile', component: ProfileComponent},
            {path: 'settings', component: SettingsComponent},
            {path: 'publish', component: PublishComponent},
            {path: 'form', component: FormsettingsComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
