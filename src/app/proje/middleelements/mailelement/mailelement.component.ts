import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-mailelement',
    templateUrl: './mailelement.component.html',
    styleUrls: ['./mailelement.component.scss']
})
export class MailelementComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
    }
}
