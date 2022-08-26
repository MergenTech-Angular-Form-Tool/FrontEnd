import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TextfieldService} from "../../../demo/service/elementservice/textfield.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";
import {Form} from "../../../demo/domain/elements/allElements";

@Component({
  selector: 'app-textfieldcontent',
  templateUrl: './textfieldcontent.component.html',
  styleUrls: ['./textfieldcontent.component.scss']
})
export class TextfieldcontentComponent implements OnInit, AfterContentChecked {
    message: string;
    placeholder: string;
    header: string;
    smalltext: string;
    change: boolean;
    id: number;
    data: any;


    constructor(private textfieldService: TextfieldService, private httpService: HttpClient,
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
                document.getElementById('headertext').innerText = parsedObject.textInputDtos[0].question;
                document.getElementById('header').innerText = parsedObject.textInputDtos[0].subtext;
                parsedObject.textInputDtos[0].placeholder = this.placeholder;
            });
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }



}
