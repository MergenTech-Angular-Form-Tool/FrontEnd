import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';


@Component({
    selector: 'app-textfield',
    templateUrl: './textfield.component.html',
    styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {
    value1: any;
    constructor() { }

    ngOnInit(): void {
    }

}
