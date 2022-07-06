import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';

@Component({
    selector: 'app-fileelement',
    templateUrl: './fileelement.component.html',
    styleUrls: ['./fileelement.component.scss']
})
export class FileelementComponent implements OnInit {

    constructor(private shareDataService: SharedDataService) {
    }

    ngOnInit(): void {
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
    }

    edit($event: any) {
        console.log($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        this.shareDataService.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
    }
}
