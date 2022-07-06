import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';

@Component({
    selector: 'app-passwordelement',
    templateUrl: './passwordelement.component.html',
    styleUrls: ['./passwordelement.component.scss']
})
export class PasswordelementComponent implements OnInit {



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
