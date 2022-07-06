import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';

@Component({
    selector: 'app-textfieldelement',
    templateUrl: './textfieldelement.component.html',
    styleUrls: ['./textfieldelement.component.scss']
})
export class TextfieldelementComponent implements OnInit {

    constructor(private sharedDataService: SharedDataService) {
    }

    ngOnInit(): void {
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
    }

    edit($event: any) {
        this.sharedDataService.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
    }
}
