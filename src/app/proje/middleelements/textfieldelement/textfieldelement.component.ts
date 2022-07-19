import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {SaveService} from '../../../demo/service/saveservice';
import {Subscription} from 'rxjs';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {TextField} from '../../../demo/domain/elements/textField';


@Component({
    selector: 'app-textfieldelement',
    templateUrl: './textfieldelement.component.html',
    styleUrls: ['./textfieldelement.component.scss']
})
export class TextfieldelementComponent implements OnInit {
    clickEventsubscription: Subscription;
    message: string;
    placeholder: string;
    header: string;
    smalltext: string;
    change: boolean;
    id: string;



    constructor(private sharedDataService: SharedDataService, private collapsedRightBarService: CollapsedRightBarService,
                private save: SaveService, private getElement: GetElementDetailsService) {



        this.getElement.currentMessage.subscribe( message => {
            const temp = message as TextField;

            if ( temp.id === this.id){
                this.header = temp.header;
                this.placeholder = temp.placeholder;
                this.smalltext = temp.subtext;
            }

        });
    }

    ngOnInit(): void {
        this.save.currentMessage.subscribe( message => this.message = message);
        this.header = 'Enter Question';
        this.placeholder = 'Enter Placeholder';
        this.smalltext = 'Enter Smalltext';
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
