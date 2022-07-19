import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {GetElementDetailsService} from "../../../demo/service/getElementDetailsService";
import {Mail} from "../../../demo/domain/elements/mail";

@Component({
    selector: 'app-mailelement',
    templateUrl: './mailelement.component.html',
    styleUrls: ['./mailelement.component.scss']
})
export class MailelementComponent implements OnInit {
    message: string;
    placeholder: string;
    header: string;
    smalltext: string;
    id: string;

    constructor(private shared: SharedDataService, private collapsed: CollapsedRightBarService, private getElement: GetElementDetailsService) {
        this.getElement.currentMessage.subscribe(message => {
            const temp = message as Mail;
            if (temp.id === this.id) {
                this.header = temp.header;
                this.placeholder = temp.placeholder;
                this.smalltext = temp.subtext;
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
