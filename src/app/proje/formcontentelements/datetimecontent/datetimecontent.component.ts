import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Date} from "../../../demo/domain/elements/date";
import {DatetimeService} from "../../../demo/service/elementservice/datetime.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";
import {Form} from "../../../demo/domain/elements/allElements";

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
        let dataxx = '';


        fetch('https://mergenform.herokuapp.com/api/formwithelements/get/' + this.data)
            // tslint:disable-next-line:only-arrow-functions
            .then(function(response) {
                return response.json();
            })
            // tslint:disable-next-line:only-arrow-functions
            .then(function(myJson) {
                dataxx = myJson;
                const parsedObject: Form = JSON.parse(JSON.stringify(dataxx));
                document.getElementById('headerdatetime').innerText = parsedObject.dateTimeInputDtos[0].header;
            });
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }


}
