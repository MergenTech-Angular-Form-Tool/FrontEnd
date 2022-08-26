import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DateService} from '../../../demo/service/elementservice/date.service';
import {HttpClient} from '@angular/common/http';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {Form} from "../../../demo/domain/elements/allElements";

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
    data: any;

    constructor(private dateService: DateService, private httpService: HttpClient,
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
                document.getElementById('titledate').innerText = parsedObject.dateInputDtos[0].title;
            });
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }

}
