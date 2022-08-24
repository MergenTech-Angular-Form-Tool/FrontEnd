import {Component, OnInit} from '@angular/core';
import {CheckboxService} from "../../../demo/service/elementservice/checkbox.service";
import {CheckBox} from "../../../demo/domain/elements/checkBox";
import {SharedDataService} from "../../../demo/service/sharedataservice";
import {Checkbox} from "primeng/checkbox";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-checkboxcontent',
    templateUrl: './checkboxcontent.component.html',
    styleUrls: ['./checkboxcontent.component.scss']
})
export class CheckboxcontentComponent implements OnInit {
    id: number;
    header: string;
    required: string;
    sequenceNumberForLocation: number;
    checkboxList: any[] = [];
    data: any;

    constructor(private checkboxService: CheckboxService, private httpService: HttpClient, private sharedDataService: SharedDataService,) {
    }

    async ngOnInit() {

        this.data = await this.sharedDataService.getData();

        await this.checkboxService.GetAll().subscribe(value => {
            return this.checkboxList.push(value);
        });
    }

    show(item: any) {
        this.id = item.id;
        this.header = item.header;
        this.required = item.required;
        this.sequenceNumberForLocation = item.sequenceNumberForLocation;
    }

}
