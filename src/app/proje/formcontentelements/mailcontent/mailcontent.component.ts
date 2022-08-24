import { Component, OnInit } from '@angular/core';
import {MailService} from "../../../demo/service/elementservice/mail.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";

@Component({
  selector: 'app-mailcontent',
  templateUrl: './mailcontent.component.html',
  styleUrls: ['./mailcontent.component.scss']
})
export class MailcontentComponent implements OnInit {
    message: string;
    placeholder: string;
    header: string;
    smalltext: string;
    id: number;
    sequenceNumberForLocation: number;
    emailInputId: number;
    mailList: any[] = [];
    data: any;

  constructor(private mailService: MailService, private httpService: HttpClient, private sharedDataService: SharedDataService) { }

    async ngOnInit() {

        this.data = await this.sharedDataService.getData();

        await this.mailService.GetAll().subscribe(value => {
            return this.mailList.push(value);
        });
    }

    show(element: any) {
        this.id = element.id;
        this.header = element.question;
        this.sequenceNumberForLocation = element.sequenceNumberForLocation;
        this.message = element.message;
        this.placeholder = element.placeholder;
        this.smalltext = element.subtext;
        this.emailInputId = element.emailInputId;
    }
}
