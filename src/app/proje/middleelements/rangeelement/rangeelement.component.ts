import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';

@Component({
    selector: 'app-rangeelement',
    templateUrl: './rangeelement.component.html',
    styleUrls: ['./rangeelement.component.scss']
})
export class RangeelementComponent implements OnInit {

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
