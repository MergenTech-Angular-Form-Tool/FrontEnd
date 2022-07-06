import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SharedDataService} from '../../demo/service/sharedataservice';

@Component({
    selector: 'app-main',
    templateUrl: './mainPage.component.html',
    styleUrls: ['./mainPage.component.scss']
})
export class MainPageComponent implements OnInit {

    @ViewChild('temp', {read: ViewContainerRef}) entry: ViewContainerRef;
    data: string;

    constructor(shareDateService: SharedDataService) {
        shareDateService.currentMessage.subscribe(message => {
            this.data = message;
        });
    }


    ngOnInit(): void {
    }

}
