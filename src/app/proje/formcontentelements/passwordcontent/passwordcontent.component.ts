import { Component, OnInit } from '@angular/core';
import {PasswordService} from "../../../demo/service/elementservice/password.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";

@Component({
  selector: 'app-passwordcontent',
  templateUrl: './passwordcontent.component.html',
  styleUrls: ['./passwordcontent.component.scss']
})
export class PasswordcontentComponent implements OnInit {
    id: number;
    q: string;
    placeholder: string;

    passwordList: any[] = [];
    data: any;

  constructor(private passwordService: PasswordService,  private httpService: HttpClient, private sharedDataService: SharedDataService) { }

    async ngOnInit() {

        this.data = await this.sharedDataService.getData();

        await this.passwordService.GetAll().subscribe(value => {
            return this.passwordList.push(value);
        });
    }

    show(element: any) {
        this.id = element.id;
        this.q = element.question;
        this.placeholder = element.placeholder;
    }

}
