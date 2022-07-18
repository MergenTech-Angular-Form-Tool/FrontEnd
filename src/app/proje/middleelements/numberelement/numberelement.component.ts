import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';

@Component({
    selector: 'app-numberelement',
    templateUrl: './numberelement.component.html',
    styleUrls: ['./numberelement.component.scss']
})
export class NumberelementComponent implements OnInit {

    val: number;

    constructor(private shared: SharedDataService, private collapsed: CollapsedRightBarService) {
    }

    ngOnInit(): void {
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
        this.collapsed.close();
        this.shared.changeMessage('');
    }

    edit($event: any) {
        this.shared.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        this.collapsed.open();
    }
}
