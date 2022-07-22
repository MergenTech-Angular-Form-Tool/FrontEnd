import {Component, OnInit} from '@angular/core';
import {FormNameService} from '../../demo/service/formnameservice';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    formName: string;

    constructor(private form: FormNameService) {
        form.currentMessage.subscribe(message => this.formName = message);
    }

    ngOnInit(): void {
    }

    changeFormName() {
        this.form.setFormName(document.getElementById('form-name').innerText);
        console.log(this.formName);
    }
}
