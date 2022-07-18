import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    flag = true;

    constructor(public translate: TranslateService) {
    }

    ngOnInit(): void {
    }

    changeLang() {

        if (this.flag) {
            this.translate.use('en');
            this.flag = false;
        } else {
            this.translate.use('tr');
            this.flag = true;
        }

    }
}
