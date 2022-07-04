import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AnasayfaComponent} from './proje/anasayfa/anasayfa.component';
import {LoginComponent} from './proje/login/login.component';
import {RegisterComponent} from './proje/register/register.component';
import {DragdropComponent} from './proje/dragdrop/dragdrop.component';
import {AdressComponent} from './proje/sidebarelements/adress/adress.component';
import {CheckboxComponent} from './proje/sidebarelements/checkbox/checkbox.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: 'anasayfa', component: AnasayfaComponent},
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'dragdrop', component: DragdropComponent},
            {path: 'adress', component: AdressComponent},
            {path: 'checkbox', component: CheckboxComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
