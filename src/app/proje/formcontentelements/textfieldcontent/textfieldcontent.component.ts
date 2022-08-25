import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TextfieldService} from "../../../demo/service/elementservice/textfield.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";

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

    textList: any[] = [];
    data: any;


    constructor(private textfieldService: TextfieldService, private httpService: HttpClient,
                private sharedDataService: SharedDataService, private ref: ChangeDetectorRef) {
    }

    async ngOnInit() {

        this.data = await this.sharedDataService.getData();

        await this.textfieldService.GetAll().subscribe(value => {
            return this.textList.push(value);
        });
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }

    show(element: any) {
        this.id = element.id;
        this.header = element.question;
        this.smalltext = element.subtext;
        this.change = element.change;
        this.placeholder = element.placeholder;
    }

}
