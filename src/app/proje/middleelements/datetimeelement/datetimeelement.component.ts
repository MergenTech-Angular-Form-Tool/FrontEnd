import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {Date} from '../../../demo/domain/elements/date';
import {NoItemService} from '../../../demo/service/noitemservice';

@Component({
    selector: 'app-datetimeelement',
    templateUrl: './datetimeelement.component.html',
    styleUrls: ['./datetimeelement.component.scss']
})
export class DatetimeelementComponent implements OnInit {

    date: Date;
    header: string;
    id: string;
    selected: string;

    constructor(private shared: SharedDataService, private collapsed: CollapsedRightBarService,
                private getElement: GetElementDetailsService, private noItemService: NoItemService) {
    }

    ngOnInit(): void {

        this.getElement.currentMessage.subscribe(message => {
            const temp = message as Date;
            if (temp.id === this.id) {
                this.header = temp.header;
                this.selected = temp.selected;
            }
        });

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
        }    }

    edit($event: any) {
        this.id = $event.currentTarget.parentElement.parentElement.parentElement.parentElement.id;
        this.shared.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        this.collapsed.open();
    }
}
