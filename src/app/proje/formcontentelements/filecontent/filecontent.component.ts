import { Component, OnInit } from '@angular/core';
import {FileuploadService} from "../../../demo/service/elementservice/fileupload.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";

@Component({
  selector: 'app-filecontent',
  templateUrl: './filecontent.component.html',
  styleUrls: ['./filecontent.component.scss']
})
export class FilecontentComponent implements OnInit {
    id: number;
    header: string;
    sequenceNumberForLocation: number;
    formId: number;
    fileList: any[] = [];
    data: any;
    fileInputId: string;

  constructor(private fileService: FileuploadService,  private httpService: HttpClient, private sharedDataService: SharedDataService) { }

    async ngOnInit() {

        this.data = await this.sharedDataService.getData();

        await this.fileService.GetAll().subscribe(value => {
            return this.fileList.push(value);
        });
    }
    show(element: any) {
        this.id = element.id;
        this.header = element.header;
        this.sequenceNumberForLocation = element.sequenceNumberForLocation;
        this.fileInputId = element.fileInputId;
    }

}
