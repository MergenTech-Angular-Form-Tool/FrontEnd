import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {Date} from '../../../demo/domain/elements/date';

@Component({
    selector: 'app-dateelement',
    templateUrl: './dateelement.component.html',
    styleUrls: ['./dateelement.component.scss']
})
export class DateelementComponent implements OnInit {

    id: string;
    header: string;
    selected: string;

    constructor(private shared: SharedDataService, private collapsed: CollapsedRightBarService,
                private getElement: GetElementDetailsService) {
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
        this.shared.changeMessage('');
    }

    edit($event: any) {
        this.id = $event.currentTarget.parentElement.parentElement.parentElement.parentElement.id;
        this.shared.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        this.collapsed.open();
    }
}
