import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {Divider} from '../../../demo/domain/elements/divider';
import {NoItemService} from '../../../demo/service/noitemservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';


@Component({
    selector: 'app-rangeelement',
    templateUrl: './rangeelement.component.html',
    styleUrls: ['./rangeelement.component.scss']
})
export class RangeelementComponent implements OnInit {
    id: string;
    color: string;
    style: string;
    height: string;
    marginBot: string;
    marginTop: string;
    space: string;

    constructor(private shared: SharedDataService, private collapsed: CollapsedRightBarService,
                private getElement: GetElementDetailsService, private noItemService: NoItemService,
                private date: ChangeDateService) {

        this.getElement.currentMessage.subscribe(message => {
            const temp = message as Divider;
            if (temp.id === this.id) {
                this.color = temp.color;
                this.style = temp.style;
                this.height = temp.height + 'px';
                this.marginBot = temp.marginBot;
                this.marginTop = temp.marginTop;
                this.space = temp.space;
            }

        });
    }

    ngOnInit(): void {
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
