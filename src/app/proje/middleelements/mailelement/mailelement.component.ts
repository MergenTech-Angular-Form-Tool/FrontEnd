import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {Mail} from '../../../demo/domain/elements/mail';
import {NoItemService} from '../../../demo/service/noitemservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';

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
    id: number;

    constructor(private shared: SharedDataService, private collapsed: CollapsedRightBarService,
                private getElement: GetElementDetailsService, private noItemService: NoItemService, private date: ChangeDateService) {
        this.getElement.currentMessage.subscribe(message => {
            const temp = message as Mail;
            if (temp.id === this.id) {
                this.header = temp.header;
                this.placeholder = temp.placeholder;
                this.smalltext = temp.subtext;
            }
        });

        this.header = 'HEADER';
        this.placeholder = 'Email';
        this.smalltext = 'SMALL_TEXT';
    }

    ngOnInit(): void {
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
        this.collapsed.close();

        const center = document.getElementById('center');
        if (center.firstElementChild.id === 'clear-button' && center.firstElementChild.nextElementSibling.nodeName === 'TEMPLATE') {
            if (center.firstElementChild.nextElementSibling.nextElementSibling === null) {
                this.noItemService.set(true);
            }
        }

        this.date.set(Date.now());
    }

    edit($event: any) {
        this.id = $event.currentTarget.parentElement.parentElement.parentElement.parentElement.id;
        this.shared.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        this.collapsed.open();

        this.date.set(Date.now());
    }
}
