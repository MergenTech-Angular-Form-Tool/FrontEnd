import {AfterContentInit, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterContentInit {

    formName: string;
    objDate: number;
    token = true;

    constructor(public translate: TranslateService, private router: Router) {
        translate.addLangs(['en', 'tr']);
        translate.use('tr');
    }

    ngOnInit(): void {
    }

    ngAfterContentInit() {

        const token = localStorage.getItem('token');
        this.token = !(token === undefined || token === null);
        // this.token = true;
    }

    logout() {
        localStorage.removeItem('token');
        this.token = false;
    }

    gotoLogin() {
        this.router.navigate(['/login']);  // define your component where you want to go
    }

    gotoRegister() {
        this.router.navigate(['/register']);  // define your component where you want to go
    }
}
