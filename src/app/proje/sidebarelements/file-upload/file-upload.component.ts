import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {ChangeDateService} from '../../../demo/service/changedateservice';
import {FileUpload} from '../../../demo/domain/elements/fileUpload';
import {FileuploadService} from '../../../demo/service/elementservice/fileupload.service';
import {FormService} from '../../../demo/service/form.service';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

    id: number;
    header: string;
    sequenceNumberForLocation: number;
    formId: number;
    fileInputId: string;
    fileuploadList: FileUpload;

    constructor(private share: SharedDataService, private getElement: GetElementDetailsService, private date: ChangeDateService,
                private fileuploadService: FileuploadService, private formService: FormService) {
    }

    ngOnInit(): void {
        this.share.currentMessage.subscribe(id => this.id = id);
    }

    onSubmit() {
        this.getElement.changeMessage({
            id: this.id,
            header: this.header
        });

        this.fileuploadList = {
            id: 1,
            sequenceNumberForLocation: this.formService.elementIndex,
            fileInputId: null,
            header: this.header,
            formId: 14,
            elementName: 'file'
        };

        // this.formService.formElements.push(this.fileuploadList);
        // console.log(this.formService.formElements);
        this.formService.elementIndex++;

        this.fileuploadService.PostAdd(this.fileuploadList).subscribe((response: any) => {
            console.log(response);
        });


        this.date.set(Date.now());
    }
}
