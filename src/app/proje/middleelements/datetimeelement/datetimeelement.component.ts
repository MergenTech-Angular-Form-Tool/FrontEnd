import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-datetimeelement',
    templateUrl: './datetimeelement.component.html',
    styleUrls: ['./datetimeelement.component.scss']
})
export class DatetimeelementComponent implements OnInit {
    date: Date;

    @Output() selectedId: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
    }

    edit($event: any) {
        console.log($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        this.selectedId.emit($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
    }
}
