import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PasswordService} from "../../../demo/service/elementservice/password.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";
import {Form} from "../../../demo/domain/elements/allElements";

@Component({
  selector: 'app-passwordcontent',
  templateUrl: './passwordcontent.component.html',
  styleUrls: ['./passwordcontent.component.scss']
})
export class PasswordcontentComponent implements OnInit, AfterContentChecked {
    id: number;
    question: string;
    placeholder: string;
    data: any;

    constructor(private passwordService: PasswordService, private httpService: HttpClient,
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
                document.getElementById('questionpass').innerText = parsedObject.passwordInputDtos[0].question;
                this.placeholder =  parsedObject.passwordInputDtos[0].placeholder;
            });
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }


}
