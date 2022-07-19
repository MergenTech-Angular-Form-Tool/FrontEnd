import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {FileUpload} from '../../../demo/domain/elements/fileUpload';

@Component({
    selector: 'app-fileelement',
    templateUrl: './fileelement.component.html',
    styleUrls: ['./fileelement.component.scss']
})
export class FileelementComponent implements OnInit {

    id: string;
    header = 'HEADER';

    constructor(private shared: SharedDataService, private collapsed: CollapsedRightBarService,
                private getElement: GetElementDetailsService) {

        this.getElement.currentMessage.subscribe(message => {
            const temp = message as FileUpload;
            if (temp.id === this.id) {
                this.header = temp.header;
            }
        });
    }

    ngOnInit(): void {
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
        this.collapsed.close();
        this.shared.changeMessage('');
    }

    edit($event: any) {
        this.id = $event.currentTarget.parentElement.parentElement.parentElement.parentElement.id;
        this.shared.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        this.collapsed.open();
    }
}
