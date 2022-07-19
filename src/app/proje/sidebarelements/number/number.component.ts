import {Component, OnInit} from '@angular/core';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {SharedDataService} from '../../../demo/service/sharedataservice';

@Component({
    selector: 'app-number',
    templateUrl: './number.component.html',
    styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {

    id: string;
    header: string;
    defaultValue: number;
    selectedValue: boolean;

    constructor(private getElement: GetElementDetailsService, private share: SharedDataService) {
    }

    ngOnInit(): void {
        this.share.currentMessage.subscribe(id => this.id = id);
    }

    onSubmit() {
        this.getElement.changeMessage({
            id: this.id,
            header: this.header,
            defaultValue: this.defaultValue,
            isNegative: this.selectedValue[0]
        });
    }
}
