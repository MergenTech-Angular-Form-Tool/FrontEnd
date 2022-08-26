import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NumberService} from "../../../demo/service/elementservice/number.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";
import {Form} from "../../../demo/domain/elements/allElements";

@Component({
  selector: 'app-numbercontent',
  templateUrl: './numbercontent.component.html',
  styleUrls: ['./numbercontent.component.scss']
})
export class NumbercontentComponent implements OnInit, AfterContentChecked {
    id: number;
    val: number;
    header: string;
    min: number;
    sequenceNumberForLocation: number;
    numberList: any[] = [];
    data: any;

    constructor(private numberService: NumberService, private httpService: HttpClient,
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
                document.getElementById('headnumber').innerText = parsedObject.numberInputDtos[0].header;
                parsedObject.numberInputDtos[0].defaultValue = this.val;
            });
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }


}
