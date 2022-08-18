import {Component, OnInit} from '@angular/core';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';
import {DividerService} from '../../../demo/service/elementservice/divider.service';
// @ts-ignore
import {Divider} from '../../domain/elements/divider';

@Component({
    selector: 'app-divider',
    templateUrl: './divider.component.html',
    styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
    id: number;
    color: string;
    style: string;
    height: string;
    marginBot: string;
    marginTop: string;
    space: string;
    sequenceNumberForLocation: number;
    formId: number;
    separatorId: null;
    dividerList: Divider ;

    constructor(private getElement: GetElementDetailsService, private share: SharedDataService, private date: ChangeDateService,
                private dividerservice: DividerService) {
    }

    ngOnInit(): void {
        this.share.currentMessage.subscribe(id => this.id = id);

    }

    onSubmit() {

        this.getElement.changeMessage({
            id: this.id,
            color: this.color,
            sequenceNumberForLocation: this.sequenceNumberForLocation,
            formId: this.formId,
            style: this.style,
            height: this.height,
            separatorId: this.separatorId,
            marginBot: this.marginBot,
            marginTop: this.marginTop,
            space: this.space,
        });
        // this.dividerList.push({
        //     id: this.id,
        //     color: this.color,
        //     style: this.style,
        //     height: this.height,
        //     marginBot: this.marginBot,
        //     marginTop: this.marginTop,
        //     space: this.space,
        // });

        this.dividerList = {
            id: 1,
            sequenceNumberForLocation: 2,
            formId: 2,
            separatorId: null,
            color: this.color,
            style: this.style,
            height: this.height,
            marginBot: this.marginBot,
            marginTop: this.marginTop,
            space: this.space,
        };

        this.dividerservice.PostAdd(this.dividerList).subscribe((response: any) => {
            console.log(response);
        });

        this.date.set(Date.now());
    }
}
