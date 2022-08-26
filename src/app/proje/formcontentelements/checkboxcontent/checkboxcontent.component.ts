import {AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CheckboxService} from '../../../demo/service/elementservice/checkbox.service';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {HttpClient} from '@angular/common/http';
import {Form} from "../../../demo/domain/elements/allElements";

@Component({
    selector: 'app-checkboxcontent',
    templateUrl: './checkboxcontent.component.html',
    styleUrls: ['./checkboxcontent.component.scss']
})
export class CheckboxcontentComponent implements OnInit, AfterContentChecked {
    id: number;
    header: string;
    required: string;
    sequenceNumberForLocation: number;
    checkboxList: any[] = [];
    data: any;


    constructor(private checkboxService: CheckboxService, private httpService: HttpClient,
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
                document.getElementById('inputheader').innerText = parsedObject.checkboxDtos[0].header;
            });
      ;
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }




}
