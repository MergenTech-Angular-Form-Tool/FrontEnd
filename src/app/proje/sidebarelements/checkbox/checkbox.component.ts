import {Component, OnInit} from '@angular/core';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';
import {CheckboxService} from '../../../demo/service/elementservice/checkbox.service';
import {CheckBox} from '../../../demo/domain/elements/checkBox';
import {FormService} from '../../../demo/service/form.service';
import {Form} from '../../../demo/domain/elements/allElements';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
    id: number;
    sequenceNumberForLocation: number;
    formId: number;
    header: string;
    required: string;
    checkboxList: CheckBox;

    constructor(private getElement: GetElementDetailsService, private share: SharedDataService,
                private date: ChangeDateService, private checkboxService: CheckboxService,
                private formService: FormService) {
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

        this.checkboxList = {
            id: 1,
            sequenceNumberForLocation: this.formService.elementIndex,
            checkboxId: null,
            formId: 14,
            header: this.header,
            required: this.required,
            elementName: 'checkbox',
        };
        // this.allElements.checkboxDtos.push({id: 1, formId: null, checkboxId: null, elementName: 'checkbox',
        //     header: 'Soru', required: 'true', sequenceNumberForLocation: 1, createTimestamp: null, updateTimestamp: null});
        // console.log(this.allElements.checkboxDtos);

        // this.formService.formElements.push(this.checkboxList);
        // console.log(this.formService.formElements);
        this.formService.elementIndex++;

        console.log(this.checkboxList);
        this.checkboxService.PostAdd(this.checkboxList).subscribe((response: any) => {
            console.log(response);
        });

        this.date.set(Date.now());
    }
}
