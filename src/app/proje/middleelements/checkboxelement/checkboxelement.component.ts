import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';

@Component({
    selector: 'app-checkboxelement',
    templateUrl: './checkboxelement.component.html',
    styleUrls: ['./checkboxelement.component.scss']
})
export class CheckboxelementComponent implements OnInit {

    @Output() selectedId: EventEmitter<string> = new EventEmitter();
    selected: string;

    constructor(private shareDataService: SharedDataService) {
        shareDataService.currentMessage.subscribe(message => this.selected = message);
    }

    ngOnInit(): void {
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
    }

    edit($event: any) {
        // this.selectedId.emit($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        // this.selectedId = $event.currentTarget.parentElement.parentElement.parentElement.parentElement.id;
        this.shareDataService.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
    }
}
