import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {SaveService} from '../../../demo/service/saveservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {TextField} from '../../../demo/domain/elements/textField';


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

    constructor(private sharedDataService: SharedDataService, private collapsedRightBarService: CollapsedRightBarService,
                private save: SaveService, private getElement: GetElementDetailsService) {

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
    }

    edit($event: any) {
        this.id = $event.currentTarget.parentElement.parentElement.parentElement.parentElement.id;
        this.sharedDataService.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        this.collapsedRightBarService.open();
    }

}
