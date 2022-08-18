import {AfterContentInit, Component, OnInit} from '@angular/core';
import {FormNameService} from '../../demo/service/formnameservice';
import {ChangeDateService} from '../../demo/service/changedateservice';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterContentInit {

    formName: string;
    objDate: number;
    token = true;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private form: FormNameService, private dateService: ChangeDateService) {
        form.currentMessage.subscribe(message => this.formName = message);
        dateService.currentMessage.subscribe(date => this.objDate = date);
    }

    ngOnInit(): void {
    }

    ngAfterContentInit() {

        const token = localStorage.getItem('token');
        this.token = !(token === undefined || token === null);
        // this.token = true;
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

    logout() {
        localStorage.removeItem('token');
        this.token = false;
        this.router.navigate(['/']);
    }


}
