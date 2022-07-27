import {Component, OnInit} from '@angular/core';
import {FormNameService} from '../../demo/service/formnameservice';
import {Changedateservice} from '../../demo/service/changedateservice';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    formName: string;
    objDate = this.changedate;
    constructor(private form: FormNameService, private changedate: Changedateservice) {
        form.currentMessage.subscribe(message => this.formName = message);
    }

    ngOnInit(): void {
    }

    changeFormName(event) {
        const element = event.srcElement;
        while (element.firstElementChild) {
            if (element.firstElementChild.nodeName === 'DIV' || element.firstElementChild.nodeName === 'BR') {
                element.removeChild(element.firstChild);
            }
        }
        this.form.setFormName(document.getElementById('form-name').innerText);
    }
}
