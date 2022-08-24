import {Component, OnInit} from '@angular/core';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';
import {CheckboxService} from '../../../demo/service/elementservice/checkbox.service';
import {CheckBox} from '../../../demo/domain/elements/checkBox';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
    id: number;
    sequenceNumberForLocation: number;
    formId: number;
    checkboxId: null;
    header: string;
    required: string;
    checkboxList: CheckBox;

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
            formId: 2,
            header: this.header,
            required: this.required
        });

        /*        const sptlitted = this.id.split('_');
                console.log('Splitted ID: ' + sptlitted);*/

        // tslint:disable-next-line:max-line-length
        this.checkboxList = {
            id: 1,
            sequenceNumberForLocation: 2,
            formId: 2,
            checkboxId: null,
            header: this.header,
            required: this.required,
            elementName: 'checkbox',
        };

        this.checkboxService.PostAdd(this.checkboxList).subscribe((response: any) => {
            console.log(response);
        });

        console.log(this.checkboxList);

        this.date.set(Date.now());
    }
}
