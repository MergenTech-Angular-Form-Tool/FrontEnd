import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {SaveService} from '../../../demo/service/saveservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {TextField} from '../../../demo/domain/elements/textField';
import {NoItemService} from '../../../demo/service/noitemservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';


@Component({
    selector: 'app-textfieldelement',
    templateUrl: './textfieldelement.component.html',
    styleUrls: ['./textfieldelement.component.scss']
})
export class TextfieldelementComponent implements OnInit {

    message: string;
    placeholder: string;
    header: string;
    smalltext: string;
    change: boolean;
    id: string;

    getPlaceHolder() {
        return this.placeholder;
    }

    constructor(private sharedDataService: SharedDataService, private collapsedRightBarService: CollapsedRightBarService,
                private save: SaveService, private getElement: GetElementDetailsService, private noItemService: NoItemService,
                private collapsed: CollapsedRightBarService, private date: ChangeDateService) {

        this.getElement.currentMessage.subscribe(message => {
            const temp = message as TextField;

            if (temp.id === this.id) {
                this.header = temp.header;
                this.placeholder = temp.placeholder;
                this.smalltext = temp.subtext;
            }
        });
    }

    ngOnInit(): void {
        this.save.currentMessage.subscribe(message => this.message = message);
        this.header = 'HEADER';
        this.placeholder = 'PLACEHOLDER';
        this.smalltext = 'SMALL_TEXT';
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
        this.sharedDataService.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        this.collapsedRightBarService.open();

        this.date.set(Date.now());
    }

}
