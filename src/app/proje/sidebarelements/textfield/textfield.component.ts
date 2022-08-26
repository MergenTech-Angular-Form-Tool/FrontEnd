import {Component, OnInit} from '@angular/core';
import {SaveService} from '../../../demo/service/saveservice';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {ChangeDateService} from '../../../demo/service/changedateservice';
import {TextfieldService} from '../../../demo/service/elementservice/textfield.service';
import {TextField} from '../../../demo/domain/elements/textField';
import {FormService} from '../../../demo/service/form.service';

@Component({
    selector: 'app-textfield',
    templateUrl: './textfield.component.html',
    styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {

    id: number;
    sequenceNumberForLocation: number;
    formId: number;
    textInputId: null;
    question: string;
    placeholder: string;
    header: string;
    subtext: string;
    change: string;
    message: string;
    textfieldList: TextField;

    constructor(private save: SaveService, private share: SharedDataService, private getElement: GetElementDetailsService,
                private date: ChangeDateService, private textfieldService: TextfieldService, private formService: FormService) {
    }

    ngOnInit(): void {
        this.save.currentMessage.subscribe(message => this.message = message);
        this.share.currentMessage.subscribe(id => this.id = id);
    }

    onSubmit() {

        this.getElement.changeMessage({
            id: this.id,
            sequenceNumberForLocation: this.sequenceNumberForLocation,
            formId: 2,
            header: this.question,
            subtext: this.subtext,
            placeholder: this.placeholder,
            change: this.change,
            question: this.question
        });

        this.textfieldList = {
            id: 1,
            sequenceNumberForLocation: this.formService.elementIndex,
            textInputId: null,
            header: this.header,
            subtext: this.subtext,
            placeholder: this.placeholder,
            change: this.change,
            formId: 14,
            question: this.question,
            elementName: 'textfield'
        };

        // this.formService.formElements.push(this.textfieldList);
        // console.log(this.formService.formElements);
        this.formService.elementIndex++;

        this.textfieldService.PostAdd(this.textfieldList).subscribe((response: any) => {
            console.log(response);
        });

        this.date.set(Date.now());
    }


}
