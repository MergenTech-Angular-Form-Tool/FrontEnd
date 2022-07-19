import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {CheckBox} from '../../../demo/domain/elements/checkBox';

@Component({
    selector: 'app-checkboxelement',
    templateUrl: './checkboxelement.component.html',
    styleUrls: ['./checkboxelement.component.scss']
})
export class CheckboxelementComponent implements OnInit {

    selected: string;
    id: string;
    header: string;
    required: string;
    options: string;

    constructor(private shared: SharedDataService, private collapsed: CollapsedRightBarService,
                private getElement: GetElementDetailsService) {
        shared.currentMessage.subscribe(message => this.selected = message);

        this.getElement.currentMessage.subscribe( message => {
            const temp = message as CheckBox;
            if ( temp.id === this.id){
                this.header = temp.header;
                this.options = temp.options;
                this.required = temp.required;
            }

        });
    }

    ngOnInit(): void {
        this.header = 'Enter Question';
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
