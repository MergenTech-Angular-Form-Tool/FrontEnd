import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {NumberObject} from '../../../demo/domain/elements/numberobject';
import {NoItemService} from '../../../demo/service/noitemservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';

@Component({
    selector: 'app-numberelement',
    templateUrl: './numberelement.component.html',
    styleUrls: ['./numberelement.component.scss']
})
export class NumberelementComponent implements OnInit {

    id: string;
    val: number;
    header: string;
    min: number;

    constructor(private shared: SharedDataService, private collapsed: CollapsedRightBarService,
                private getElement: GetElementDetailsService, private noItemService: NoItemService,
                private date: ChangeDateService) {

        this.getElement.currentMessage.subscribe(message => {
            const temp = message as NumberObject;
            if (temp.id === this.id) {
                this.id = temp.id;
                this.header = temp.header;
                this.val = temp.defaultValue;
                if (temp.isNegative) {
                    this.min = 0;
                } else {
                    this.min = -9999999;
                }
            }
        });
    }

    ngOnInit(): void {
        this.header = 'HEADER';
        this.val = 0;
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
