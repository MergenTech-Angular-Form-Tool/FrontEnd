import {Component, OnInit} from '@angular/core';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';
import {Date} from '../../../demo/domain/elements/date';
import {DateService} from '../../../demo/service/elementservice/date.service';
import {FormService} from "../../../demo/service/form.service";

interface Date2 {
    format: string;
    value: string;
}

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
    id: number;
    header: string;
    selected: string;
    sequenceNumberForLocation: number;
    formId: number;
    dateInputId: string;
    title: string;
    hide: string;
    dateFormat: string;
    dateValue: string;
    dateFormats: Date2[];
    question: string;
    dateList: Date;

    constructor(private share: SharedDataService, private getElement: GetElementDetailsService, private date: ChangeDateService,
                private dateservice: DateService, private formService: FormService) {
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
            selected: this.selected,
            sequenceNumberForLocation: 4,
            formId: 2,
            dateInputId: null,
            title: this.title,
            hide: this.hide,
            dateFormat: this.dateFormat,
            dateValue: this.dateValue,
        });

        // this.dateList.push({
        //     id: this.id,
        //     header: this.question,
        //     selected: this.selected
        // });
        this.dateList = {
            id: 1,
            header: this.header,
            selected: this.selected,
            sequenceNumberForLocation: 4,
            formId: 2,
            dateInputId: null,
            title: this.title,
            hide: this.hide,
            dateFormat: this.dateFormat,
            dateValue: this.dateValue,
            elementName: 'date'
        };

        this.formService.formElements.push(this.dateList);
        console.log(this.formService.formElements);

        /*       this.dateService.PostAdd(this.dateList).subscribe((response: any) => {
                   console.log(response);
               });*/


        this.date.set(Date.now());
    }

}
