import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-lang-switcher',
    templateUrl: './lang-switcher.component.html',
    styleUrls: ['./lang-switcher.component.scss']
})
export class LangSwitcherComponent implements OnInit {

    flag = true;

    constructor(private translate: TranslateService) {
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
