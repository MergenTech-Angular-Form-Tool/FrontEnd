import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {Passwordfield} from '../../../demo/domain/elements/passwordfield';
import {NoItemService} from '../../../demo/service/noitemservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';

@Component({
    selector: 'app-passwordelement',
    templateUrl: './passwordelement.component.html',
    styleUrls: ['./passwordelement.component.scss']
})
export class PasswordelementComponent implements OnInit {

    id: string;
    q: string;
    placeholder: string;

    constructor(private shared: SharedDataService, private collapsed: CollapsedRightBarService,
                private getElement: GetElementDetailsService, private noItemService: NoItemService,
                private date: ChangeDateService) {

        this.getElement.currentMessage.subscribe(message => {
            const temp = message as Passwordfield;
            if (temp.id === this.id) {
                this.q = temp.q;
                this.placeholder = temp.placeholder;
            }
        });
    }

    ngOnInit(): void {
        this.q = 'HEADER';
        this.placeholder = 'PLACEHOLDER';
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
