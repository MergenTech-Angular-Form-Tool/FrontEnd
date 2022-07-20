import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CollapsedRightBarService} from '../../demo/service/collapsedRightBarService';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {SharedDataService} from '../../demo/service/sharedataservice';

@Component({
    selector: 'app-main',
    templateUrl: './mainPage.component.html',
    styleUrls: ['./mainPage.component.scss']
})


export class MainPageComponent implements OnInit {

    @ViewChild('temp', {read: ViewContainerRef}) entry: ViewContainerRef;

    constructor(public translate: TranslateService, private collapsedRightBarService: CollapsedRightBarService,
                private sharedDataService: SharedDataService) {
        translate.addLangs(['en', 'tr']);
        translate.setDefaultLang('tr');
    }

    ngOnInit(): void {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos <= 25) {
                document.getElementById('sec-nav').style.top = '60px';
                document.getElementById('left').style.top = '104px';
                document.getElementById('right').style.top = '104px';
            } else {
                document.getElementById('sec-nav').style.top = '0';
                document.getElementById('left').style.top = '44px';
                document.getElementById('right').style.top = '44px';
            }
            prevScrollpos = currentScrollPos;
        };
    }

    clearall() {
        this.entry.clear();
        this.collapsedRightBarService.close();
        this.sharedDataService.changeMessage(' _ ');
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

}
