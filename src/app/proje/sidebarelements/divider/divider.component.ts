import {Component, OnInit} from '@angular/core';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';

@Component({
    selector: 'app-divider',
    templateUrl: './divider.component.html',
    styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
    id: string;
    color: string;
    style: string;
    height: string;
    marginBot: string;
    marginTop: string;
    space: string;
    dividerList = [];

    constructor(private getElement: GetElementDetailsService, private share: SharedDataService, private date: ChangeDateService) {
    }

    ngOnInit(): void {
        this.share.currentMessage.subscribe(id => this.id = id);

    }

    onSubmit() {

        this.getElement.changeMessage({
            id: this.id,
            color: this.color,
            style: this.style,
            height: this.height,
            marginBot: this.marginBot,
            marginTop: this.marginTop,
            space: this.space,
        });

        this.dividerList.push({
            id: this.id,
            color: this.color,
            style: this.style,
            height: this.height,
            marginBot: this.marginBot,
            marginTop: this.marginTop,
            space: this.space,
        });

        console.log(this.dividerList);

        this.date.set(Date.now());
    }
}
