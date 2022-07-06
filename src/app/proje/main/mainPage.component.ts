import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './mainPage.component.html',
    styleUrls: ['./mainPage.component.scss']
})
export class MainPageComponent implements OnInit {

    @ViewChild('temp', {read: ViewContainerRef}) entry: ViewContainerRef;

    constructor() {
    }

    ngOnInit(): void {
    }

}
