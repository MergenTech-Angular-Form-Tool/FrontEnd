import {Component, OnInit} from '@angular/core';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {ChangeDateService} from '../../../demo/service/changedateservice';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

    id: string;
    q: string;
    placeholder: string;
    passwordList = [];

    constructor(private share: SharedDataService, private getElement: GetElementDetailsService, private date: ChangeDateService) {
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

        this.passwordList.push({
            id: this.id,
            q: this.q,
            placeholder: this.placeholder
        });

        console.log(this.passwordList);

        this.date.set(Date.now());
    }
}
