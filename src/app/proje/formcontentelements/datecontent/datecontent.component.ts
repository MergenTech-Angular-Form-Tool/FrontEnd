import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DateService} from '../../../demo/service/elementservice/date.service';
import {HttpClient} from '@angular/common/http';
import {SharedDataService} from '../../../demo/service/sharedataservice';

@Component({
  selector: 'app-datecontent',
  templateUrl: './datecontent.component.html',
  styleUrls: ['./datecontent.component.scss']
})
export class DatecontentComponent implements OnInit, AfterContentChecked {
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

    dateList: any[] = [];
    data: any;

    constructor(private dateService: DateService, private httpService: HttpClient,
                private sharedDataService: SharedDataService, private ref: ChangeDetectorRef) {
    }

    async ngOnInit() {
        this.data = await this.sharedDataService.getData();

        await this.dateService.GetAll().subscribe(value => {
            return this.dateList.push(value);
        });
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }
    show(element: any) {
        this.id = element.id;
        this.header = element.header;
        this.selected = element.selected;
        this.sequenceNumberForLocation = element.sequenceNumberForLocation;
        this.title = element.title;
        this.hide = element.hide;
        this.dateFormat = element.dateFormat;
        this.dateValue = element.dateValue;
        this.dateInputId = element.dateInputId;
    }

}
