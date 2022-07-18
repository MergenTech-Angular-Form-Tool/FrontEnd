import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CollapsedRightBarService} from "../../demo/service/collapsedRightBarService";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-main',
    templateUrl: './mainPage.component.html',
    styleUrls: ['./mainPage.component.scss']
})


export class MainPageComponent implements OnInit {

    @ViewChild('temp', {read: ViewContainerRef}) entry: ViewContainerRef;

    constructor(public translate: TranslateService, private collapsedRightBarService: CollapsedRightBarService) {
        translate.addLangs(['en', 'tr']);
        translate.setDefaultLang('tr');
    }

    ngOnInit(): void {

    }

    clearall() {
        this.entry.clear();
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            console.log('Transfering item to new container')
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }
}
