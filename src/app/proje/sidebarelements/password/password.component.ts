import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {ChangeDateService} from '../../../demo/service/changedateservice';
import {PasswordService} from '../../../demo/service/elementservice/password.service';
import {Passwordfield} from '../../../demo/domain/elements/passwordfield';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

    id: number;
    q: string;
    placeholder: string;
    formId: number;
    passwordList: Passwordfield;

    constructor(private share: SharedDataService, private getElement: GetElementDetailsService,
                private date: ChangeDateService, private passwordService: PasswordService) {
    }

    ngOnInit(): void {
        this.share.currentMessage.subscribe(id => this.id = id);
    }

    onSubmit() {

        this.getElement.changeMessage({
            id: this.id,
            q: this.q,
            placeholder: this.placeholder
        });
        this.passwordList = {
            id: 2,
            q: this.q,
            formId: 5,
            placeholder: this.placeholder,
            elementName: 'password'
        };

        this.passwordService.PostAdd(this.passwordList).subscribe((response: any) => {
            console.log(response);
        });

        this.date.set(Date.now());
    }
}
