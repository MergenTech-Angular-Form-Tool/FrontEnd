import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {CheckBox} from '../../../demo/domain/elements/checkBox';
import {NoItemService} from '../../../demo/service/noitemservice';

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
                private getElement: GetElementDetailsService, private noItemService: NoItemService) {
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
        this.header = 'OPTION';
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
