import {Component, OnInit} from '@angular/core';
import {SaveService} from '../../../demo/service/saveservice';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {ChangeDateService} from '../../../demo/service/changedateservice';
import {MailService} from '../../../demo/service/elementservice/mail.service';
import {Mail} from '../../../demo/domain/elements/mail';
import {FormService} from '../../../demo/service/form.service';

@Component({
    selector: 'app-mail',
    templateUrl: './mail.component.html',
    styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
    checked: string;
    detail: string;
    val2 = 15;
    question: string;
    placeholder: string;
    subtext: string;
    id: string;
    sequenceNumberForLocation: number;
    formId: number;
    emailInputId: string;
    mailList: Mail;

    constructor(private save: SaveService, private share: SharedDataService, private getElement: GetElementDetailsService,
                private date: ChangeDateService, private mailService: MailService, private formService: FormService) {
    }

    ngOnInit(): void {
        this.share.currentMessage.subscribe(id => this.id = id);
    }

    onSubmit() {

        this.getElement.changeMessage({
            id: this.id,
            checked: this.checked,
            detail: this.detail,
            val2: this.val2,
            header: this.question,
            subtext: this.subtext,
            placeholder: this.placeholder
        });
        this.mailList = {
            id: 1,
            sequenceNumberForLocation: this.formService.elementIndex,
            emailInputId: null,
            checked: this.checked,
            header: this.question,
            subtext: this.subtext,
            detail: this.detail,
            placeholder: this.placeholder,
            question: this.question,
            formId: 14,
            elementName: 'mail'
        };

        // this.formService.formElements.push(this.mailList);
        // console.log(this.formService.formElements);
        this.formService.elementIndex++;

        this.mailService.PostAdd(this.mailList).subscribe((response: any) => {
            console.log(response);
        });

        this.date.set(Date.now());
    }


}
