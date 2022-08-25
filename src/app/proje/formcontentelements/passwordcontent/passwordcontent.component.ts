import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PasswordService} from "../../../demo/service/elementservice/password.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";

@Component({
  selector: 'app-passwordcontent',
  templateUrl: './passwordcontent.component.html',
  styleUrls: ['./passwordcontent.component.scss']
})
export class PasswordcontentComponent implements OnInit, AfterContentChecked {
    id: number;
    question: string;
    placeholder: string;

    passwordList: any[] = [];
    data: any;

    constructor(private passwordService: PasswordService, private httpService: HttpClient,
                private sharedDataService: SharedDataService, private ref: ChangeDetectorRef) {
    }

    async ngOnInit() {

        this.data = await this.sharedDataService.getData();

        await this.passwordService.GetAll().subscribe(value => {
            return this.passwordList.push(value);
        });
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }

    show(element: any) {
        this.id = element.id;
        this.question = element.question;
        this.placeholder = element.placeholder;
    }

}
