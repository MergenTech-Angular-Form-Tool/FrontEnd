import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FileuploadService} from "../../../demo/service/elementservice/fileupload.service";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../../../demo/service/sharedataservice";
import {Form} from "../../../demo/domain/elements/allElements";

@Component({
  selector: 'app-filecontent',
  templateUrl: './filecontent.component.html',
  styleUrls: ['./filecontent.component.scss']
})
export class FilecontentComponent implements OnInit,AfterContentChecked {
    id: number;
    header: string;
    sequenceNumberForLocation: number;
    formId: number;
    data: any;


    constructor(private fileService: FileuploadService, private httpService: HttpClient,
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
                document.getElementById('headfile').innerText = parsedObject.fileInputDtos[0].header;
            });
    }

    ngAfterContentChecked() {
        this.ref.detectChanges();
    }

}
