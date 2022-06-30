import {Component, OnInit} from '@angular/core';
import {Singleton} from '../../utilities/singleton';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    login(email: string, pass: string) {

        if (email === '' || pass === '') {
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Some fields are empty!'});
            return;
        }

        if (!Singleton.validateEmail(email)) {
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid email!'});
            return;
        }

        this.messageService.add({severity: 'success', summary: 'Login Successful', detail: 'Welcome to the system!'});
    }

    gotoHome() {
        this.router.navigate(['/register']);  // define your component where you want to go
    }

}

