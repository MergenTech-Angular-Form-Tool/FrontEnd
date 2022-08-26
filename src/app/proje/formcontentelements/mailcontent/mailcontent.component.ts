import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MailService} from "../../../demo/service/elementservice/mail.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";
import {Form} from "../../../demo/domain/elements/allElements";

@Component({
  selector: 'app-mailcontent',
  templateUrl: './mailcontent.component.html',
  styleUrls: ['./mailcontent.component.scss']
})
export class MailcontentComponent implements OnInit, AfterContentChecked {
    message: string;
    placeholder: string;
    header: string;
    smalltext: string;
    id: number;
    sequenceNumberForLocation: number;
    emailInputId: number;
    mailList: any[] = [];
    data: any;

    constructor(private mailService: MailService, private httpService: HttpClient,
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
                document.getElementById('headermail').innerText = parsedObject.emailInputDtos[0].question;
                document.getElementById('smalltextmail').innerText = parsedObject.emailInputDtos[0].subtext;
                parsedObject.emailInputDtos[0].placeholder = this.placeholder;
            });
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }

}
