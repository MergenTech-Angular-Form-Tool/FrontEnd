import { Component, OnInit } from '@angular/core';
import {DividerService} from "../../../demo/service/elementservice/divider.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";

@Component({
  selector: 'app-rangecontent',
  templateUrl: './rangecontent.component.html',
  styleUrls: ['./rangecontent.component.scss']
})
export class RangecontentComponent implements OnInit {
    id: number;
    color: string;
    style: string;
    height: string;
    marginBot: string;
    marginTop: string;
    space: string;
    dividerList: any[] = [];
    data: any;

  constructor(private dividerService: DividerService , private httpService: HttpClient, private sharedDataService: SharedDataService) { }

    async ngOnInit() {

        this.data = await this.sharedDataService.getData();

        await this.dividerService.GetAll().subscribe(value => {
            return this.dividerList.push(value);
        });
    }
    show(element: any) {
        this.id = element.id;
        this.color = element.color;
        this.style = element.style;
        this.height = element.height;
        this.marginTop = element.marginTop;
        this.marginBot = element.marginBot;
        this.space = element.space;
    }

}
