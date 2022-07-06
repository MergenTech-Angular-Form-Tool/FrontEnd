import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';

@Component({
    selector: 'app-numberelement',
    templateUrl: './numberelement.component.html',
    styleUrls: ['./numberelement.component.scss']
})
export class NumberelementComponent implements OnInit {

    val: number;

    constructor(private shareDataService: SharedDataService) {
    }

    ngOnInit(): void {
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
    }

    edit($event: any) {
        this.shareDataService.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
    }
}
