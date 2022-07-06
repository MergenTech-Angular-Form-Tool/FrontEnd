import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';

@Component({
    selector: 'app-datetimeelement',
    templateUrl: './datetimeelement.component.html',
    styleUrls: ['./datetimeelement.component.scss']
})
export class DatetimeelementComponent implements OnInit {

    date: Date;

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
