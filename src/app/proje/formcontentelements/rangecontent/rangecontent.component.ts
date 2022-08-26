import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DividerService} from "../../../demo/service/elementservice/divider.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";
import {Form} from "../../../demo/domain/elements/allElements";

@Component({
  selector: 'app-rangecontent',
  templateUrl: './rangecontent.component.html',
  styleUrls: ['./rangecontent.component.scss']
})
export class RangecontentComponent implements OnInit, AfterContentChecked {
    id: number;
    color: string;
    style: string;
    height: string;
    marginBot: string;
    marginTop: string;
    space: string;
    dividerList: any[] = [];
    data: any;

    constructor(private dividerService: DividerService, private httpService: HttpClient,
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
                this.height = parsedObject.separatorDtos[0].height;
                parsedObject.separatorDtos[0].color = this.color;
                this.space = parsedObject.separatorDtos[0].space;
            });
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }


}
