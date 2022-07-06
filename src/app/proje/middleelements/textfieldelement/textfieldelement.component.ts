import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-textfieldelement',
    templateUrl: './textfieldelement.component.html',
    styleUrls: ['./textfieldelement.component.scss']
})
export class TextfieldelementComponent implements OnInit {

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
