import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {Date} from '../../../demo/domain/elements/date';
import {NoItemService} from '../../../demo/service/noitemservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';

@Component({
    selector: 'app-dateelement',
    templateUrl: './dateelement.component.html',
    styleUrls: ['./dateelement.component.scss']
})
export class DateelementComponent implements OnInit {

    id: number;
    header: string;
    selected: string;
    sequenceNumberForLocation: number;
    formId: number;
    dateInputId: string;
    title: string;
    hide: string;
    dateFormat: string;
    dateValue: string;

    constructor(private shared: SharedDataService, private collapsed: CollapsedRightBarService,
                private getElement: GetElementDetailsService, private noItemService: NoItemService,
                private date: ChangeDateService) {
        this.getElement.currentMessage.subscribe(message => {
            const temp = message as Date;
            if (temp.id === this.id) {
                this.header = temp.header;
                this.selected = temp.selected;
            }
        });
    }

    ngOnInit(): void {
        this.header = 'HEADER';
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
