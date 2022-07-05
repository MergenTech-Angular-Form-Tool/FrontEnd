import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-numberelement',
    templateUrl: './numberelement.component.html',
    styleUrls: ['./numberelement.component.scss']
})
export class NumberelementComponent implements OnInit {

    val: number;
    width400 = 'width:400px;';

    constructor() {
    }

    ngOnInit(): void {
    }

}
