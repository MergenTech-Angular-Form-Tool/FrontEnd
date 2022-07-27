import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CollapsedRightBarService} from '../../demo/service/collapsedRightBarService';
import {SharedDataService} from '../../demo/service/sharedataservice';
import {NoItemService} from '../../demo/service/noitemservice';
import {ChangeDateService} from '../../demo/service/changedateservice';

@Component({
    selector: 'app-main',
    templateUrl: './mainPage.component.html',
    styleUrls: ['./mainPage.component.scss']
})


export class MainPageComponent implements OnInit {

    @ViewChild('temp', {read: ViewContainerRef}) entry: ViewContainerRef;
    noItem: boolean;

    constructor(public translate: TranslateService, private collapsedRightBarService: CollapsedRightBarService,
                private sharedDataService: SharedDataService, private noItemService: NoItemService, private date: ChangeDateService) {
        translate.addLangs(['en', 'tr']);
        translate.setDefaultLang('tr');
        noItemService.currentMessage.subscribe(message => this.noItem = message);
    }

    ngOnInit(): void {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos <= 25) {
                document.getElementById('sec-nav').style.top = '60px';
                document.getElementById('left').style.top = '114px';
                document.getElementById('right').style.top = '114px';
            } else {
                document.getElementById('sec-nav').style.top = '0';
                document.getElementById('left').style.top = '54px';
                document.getElementById('right').style.top = '54px';
            }
            prevScrollpos = currentScrollPos;
        };
    }

    clearall() {
        this.noItemService.set(true);
        this.entry.clear();
        this.collapsedRightBarService.close();
        this.sharedDataService.changeMessage(' _ ');
        this.date.set(Date.now());
    }
}
