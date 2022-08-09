import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {ChangeDateService} from '../../../demo/service/changedateservice';

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
    dateFormats: Date[];
    selected: string;
    question: string;
    id: string;

    constructor(private share: SharedDataService, private getElement: GetElementDetailsService, private date: ChangeDateService) {
    }

    ngOnInit(): void {
        this.share.currentMessage.subscribe(id => this.id = id);

        this.dateFormats = [
            {format: 'dd.mm.yy', value: 'dd.mm.yy'},
            {format: 'dd-mm-yy', value: 'dd-mm-yy'},
            {format: 'dd/mm/yy', value: 'dd/mm/yy'},
            {format: 'mm.dd.yy', value: 'mm.dd.yy'},
            {format: 'mm-dd-yy', value: 'mm-dd-yy'},
            {format: 'mm/dd/yy', value: 'mm/dd/yy'}];
    }

    onSubmit() {

        this.getElement.changeMessage({
            id: this.id,
            header: this.question,
            selected: this.selected
        });

        this.date.set(Date.now());
    }
}
