import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Date} from "../../../demo/domain/elements/date";
import {DatetimeService} from "../../../demo/service/elementservice/datetime.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";

@Component({
  selector: 'app-datetimecontent',
  templateUrl: './datetimecontent.component.html',
  styleUrls: ['./datetimecontent.component.scss']
})
export class DatetimecontentComponent implements OnInit, AfterContentChecked{
    date: Date;
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


    datetimeList: any[] = [];
    data: any;

    constructor(private datatimeService: DatetimeService, private httpService: HttpClient,
                private sharedDataService: SharedDataService, private ref: ChangeDetectorRef) {
    }

    async ngOnInit() {
        this.data = await this.sharedDataService.getData();

        await this.datatimeService.GetAll().subscribe(value => {
            return this.datetimeList.push(value);
        });
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }
    show(element: any) {
        this.id = element.id;
        this.header = element.question;
        this.selected = element.selected;
        this.sequenceNumberForLocation = element.sequenceNumberForLocation;
        this.title = element.title;
        this.hide = element.hide;
        this.dateFormat = element.dateFormat;
        this.dateValue = element.dateValue;
        this.dateInputId = element.dateInputId;
    }

}
