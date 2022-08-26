import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {ChangeDateService} from '../../../demo/service/changedateservice';
import {PasswordService} from '../../../demo/service/elementservice/password.service';
import {Passwordfield} from '../../../demo/domain/elements/passwordfield';
import {FormService} from '../../../demo/service/form.service';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

    id: number;
    question: string;
    placeholder: string;
    formId: number;
    passwordList: Passwordfield;

    constructor(private share: SharedDataService, private getElement: GetElementDetailsService,
                private date: ChangeDateService, private passwordService: PasswordService, private formService: FormService) {
    }

    ngOnInit(): void {
        this.share.currentMessage.subscribe(id => this.id = id);
    }

    onSubmit() {

        this.getElement.changeMessage({
            id: this.id,
            question: this.question,
            placeholder: this.placeholder
        });
        this.passwordList = {
            id: 1,
            question: this.question,
            placeholder: this.placeholder,
            sequenceNumberForLocation: this.formService.elementIndex,
            formId: 14,
            elementName: 'password'
        };

        // this.formService.formElements.push(this.passwordList);
        // console.log(this.formService.formElements);
        this.formService.elementIndex++;

        this.passwordService.PostAdd(this.passwordList).subscribe((response: any) => {
            console.log(response);
        });

        this.date.set(Date.now());
    }
}
