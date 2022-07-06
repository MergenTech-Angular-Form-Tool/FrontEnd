import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-numberelement',
    templateUrl: './numberelement.component.html',
    styleUrls: ['./numberelement.component.scss']
})
export class NumberelementComponent implements OnInit {

    val: number;
    width400 = 'width:400px;';

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
