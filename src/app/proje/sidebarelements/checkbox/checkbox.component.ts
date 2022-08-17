import {Component, OnInit} from '@angular/core';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';
import {CheckboxService} from '../../../demo/service/elementservice/checkbox.service';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
    id: string;
    sequenceNumberForLocation: number;
    header: string;
    required: string;
    checkboxList = [];

    constructor(private getElement: GetElementDetailsService, private share: SharedDataService,
                private date: ChangeDateService, private checkboxService: CheckboxService) {
    }

    ngOnInit(): void {
        this.share.currentMessage.subscribe(id => this.id = id);
    }

    onSubmit() {
        this.getElement.changeMessage({
            id: this.id,
            sequenceNumberForLocation: this.sequenceNumberForLocation,
            header: this.header,
            required: this.required,
        });

        const sptlitted = this.id.split('_');
        console.log('Splitted ID: ' + sptlitted);

        this.checkboxList.push({
            id: sptlitted[0],
            sequenceNumberForLocation: sptlitted[1],
            header: this.header,
            required: this.required
        });

        console.log(this.checkboxList);

        this.date.set(Date.now());
    }
}
