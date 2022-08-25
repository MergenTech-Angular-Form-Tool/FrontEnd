import {Component, OnInit} from '@angular/core';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';
import {NumberService} from "../../../demo/service/elementservice/number.service";
import {NumberObject} from "../../../demo/domain/elements/numberobject";
import {FormService} from "../../../demo/service/form.service";

@Component({
    selector: 'app-number',
    templateUrl: './number.component.html',
    styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {

    id: number;
    header: string;
    defaultValue: number;
    isNegative: boolean;
    numberList: NumberObject;
    sequenceNumberForLocation: number;
    formId: number;
    numberInputId: string;

    constructor(private getElement: GetElementDetailsService, private share: SharedDataService, private date: ChangeDateService,
                private numberService: NumberService, private formService: FormService) {
    }

    ngOnInit(): void {
        this.share.currentMessage.subscribe(id => this.id = id);
    }

    onSubmit() {

        this.getElement.changeMessage({
            id: this.id,
            header: this.header,
            defaultValue: this.defaultValue,
            isNegative: this.isNegative
        });
        // this.numberList.push({
        //     id: this.id,
        //     header: this.header,
        //     defaultValue: this.defaultValue,
        //     isNegative: this.isNegative
        // });

        this.numberList = {
            id: 1,
            sequenceNumberForLocation: 4,
            formId: 2,
            numberInputId: null,
            header: this.header,
            defaultValue: this.defaultValue,
            isNegative: this.isNegative,
            elementName: 'number'
        };
        this.formService.formElements.push(this.numberList);
        console.log(this.formService.formElements);

/*        this.numberService.PostAdd(this.numberList).subscribe((response: any) => {
            console.log(response);
        });*/

        this.date.set(Date.now());
    }
}
