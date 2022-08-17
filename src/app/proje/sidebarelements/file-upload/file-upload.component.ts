import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {ChangeDateService} from '../../../demo/service/changedateservice';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

    id: string;
    header: string;
    fileUploadList = [];

    constructor(private share: SharedDataService, private getElement: GetElementDetailsService, private date: ChangeDateService) {
    }

    ngOnInit(): void {
        this.share.currentMessage.subscribe(id => this.id = id);
    }

    onSubmit() {
        this.getElement.changeMessage({
            id: this.id,
            header: this.header
        });

        this.fileUploadList.push({
            id: this.id,
            header: this.header
        });

        console.log(this.fileUploadList);

        this.date.set(Date.now());
    }
}
