import { Component, OnInit } from '@angular/core';
import {NumberService} from "../../../demo/service/elementservice/number.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";

@Component({
  selector: 'app-numbercontent',
  templateUrl: './numbercontent.component.html',
  styleUrls: ['./numbercontent.component.scss']
})
export class NumbercontentComponent implements OnInit {
    id: number;
    val: number;
    header: string;
    min: number;
    sequenceNumberForLocation: number;
    numberList: any[] = [];
    data: any;

  constructor(private numberService: NumberService, private httpService: HttpClient, private sharedDataService: SharedDataService) { }

    async ngOnInit() {

        this.data = await this.sharedDataService.getData();

        await this.numberService.GetAll().subscribe(value => {
            return this.numberList.push(value);
        });
    }

    show(element: any) {
        this.id = element.id;
        this.header = element.header;
        this.sequenceNumberForLocation = element.sequenceNumberForLocation;
        this.val = element.defaultValue;
    }


}
