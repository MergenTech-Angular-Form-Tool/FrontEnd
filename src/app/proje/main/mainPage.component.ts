import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-main',
    templateUrl: './mainPage.component.html',
    styleUrls: ['./mainPage.component.scss']
})


export class MainPageComponent implements OnInit {

    @ViewChild('temp', {read: ViewContainerRef}) entry: ViewContainerRef;

    constructor(public translate: TranslateService) {
        translate.addLangs(['en', 'tr']);
        translate.setDefaultLang('en');

    }

    ngOnInit(): void {

    }

    clearall() {
        this.entry.clear();
    }
}
