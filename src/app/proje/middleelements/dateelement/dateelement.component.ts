import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';

@Component({
    selector: 'app-dateelement',
    templateUrl: './dateelement.component.html',
    styleUrls: ['./dateelement.component.scss']
})
export class DateelementComponent implements OnInit {

    @Output() selectedId: EventEmitter<string> = new EventEmitter();

    constructor(private shareDataService: SharedDataService) {
    }

    ngOnInit(): void {
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
    }

    edit($event: any) {
        // this.selectedId.emit($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        this.shareDataService.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);

    }
}
