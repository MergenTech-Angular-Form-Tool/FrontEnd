import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';

@Component({
    selector: 'app-passwordelement',
    templateUrl: './passwordelement.component.html',
    styleUrls: ['./passwordelement.component.scss']
})
export class PasswordelementComponent implements OnInit {

    constructor(private shareDataService: SharedDataService, private collapsedRightBarService: CollapsedRightBarService) {
    }

    ngOnInit(): void {
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
    }

    edit($event: any) {
        this.shareDataService.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        this.collapsedRightBarService.open();
    }
}
