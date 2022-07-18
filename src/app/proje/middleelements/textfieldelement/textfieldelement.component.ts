import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../../demo/service/collapsedRightBarService';
import {SaveService} from '../../../demo/service/saveservice';
import {Subscription} from 'rxjs';

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

    constructor(private sharedDataService: SharedDataService, private collapsedRightBarService: CollapsedRightBarService,
                private save: SaveService) {

        this.clickEventsubscription = this.save.getClickEvent().subscribe(() => {
            this.pass();
        });
    }

    ngOnInit(): void {
        this.save.currentMessage.subscribe( message => this.message = message);
    }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
    }

    edit($event: any) {
        this.sharedDataService.changeMessage($event.currentTarget.parentElement.parentElement.parentElement.parentElement.id);
        // this.collapsedRightBarService.open();
    }
    pass(){
        this.header = this.message;


    }



}
