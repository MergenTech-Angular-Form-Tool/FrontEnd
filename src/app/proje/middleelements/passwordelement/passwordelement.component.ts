import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-passwordelement',
    templateUrl: './passwordelement.component.html',
    styleUrls: ['./passwordelement.component.scss']
})
export class PasswordelementComponent implements OnInit {


    constructor() {
    }

    ngOnInit(): void {
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
    }
}
