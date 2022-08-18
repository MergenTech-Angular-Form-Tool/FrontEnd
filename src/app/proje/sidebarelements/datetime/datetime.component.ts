import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {ChangeDateService} from '../../../demo/service/changedateservice';
import {DatetimeService} from '../../../demo/service/elementservice/datetime.service';
import {Date} from '../../../demo/domain/elements/date';

interface Date2 {
    format: string;
    value: string;
}

@Component({
    selector: 'app-datetime',
    templateUrl: './datetime.component.html',
    styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit {
    hide: string;
    dateFormats: Date2[];
    selected: string;
    question: string;
    header: string;
    id: number;
    sequenceNumberForLocation: number;
    formId: number;
    dateInputId: string;
    title: string;
    dateFormat: string;
    dateValue: string;
    datetimeList: Date;

    constructor(private share: SharedDataService, private getElement: GetElementDetailsService, private date: ChangeDateService,
                private datetimeservice: DatetimeService) {
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

        // this.datetimeList.push({
        //     id: this.id,
        //     header: this.question,
        //     selected: this.selected
        // });

        this.datetimeList = {
            id: 1,
            header: this.question,
            selected: this.selected,
            sequenceNumberForLocation: 4,
            formId: 2,
            dateInputId: null,
            title: this.title,
            hide: this.hide,
            dateFormat: this.dateFormat,
            dateValue: this.dateValue,
        };

        this.datetimeservice.PostAdd(this.datetimeList).subscribe((response: any) => {
            console.log(response);
        });


        this.date.set(Date.now());
    }
}
