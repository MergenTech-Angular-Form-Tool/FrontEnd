import {Component, OnInit} from '@angular/core';

interface Date {
    format: string;
    value: string;
}

@Component({
    selector: 'app-datetime',
    templateUrl: './datetime.component.html',
    styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit {
    hide: boolean;
    passwordInput: string;
    date2: any;
    dateFormats: Date[];
    selected: string;

    constructor() {
        this.dateFormats = [
            {format: 'dd.mm.yy', value: 'dd.mm.yy'},
            {format: 'dd-mm-yy', value: 'dd-mm-yy'},
            {format: 'dd/mm/yy', value: 'dd/mm/yy'},
            {format: 'mm.dd.yy', value: 'mm.dd.yy'},
            {format: 'mm-dd-yy', value: 'mm-dd-yy'},
            {format: 'mm/dd/yy', value: 'dd/mm/yy'}];
    }

    ngOnInit(): void {
    }

}
