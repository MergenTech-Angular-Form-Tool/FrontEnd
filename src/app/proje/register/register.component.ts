import {Component, OnInit} from '@angular/core';
import {Singleton} from '../../utilities/singleton';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(private messageService: MessageService) {
    }

    ngOnInit(): void {
    }

    register(name: string, surname: string, email: string, pass: string, passConfirm: string) {

        if (name === '' || surname === '' || email === '' || pass === '' || passConfirm === '') {
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Some fields are empty!'});
            return;
        }

        if (pass !== passConfirm) {
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Passwords are not match!'});
            return;
        }

        if (!Singleton.validateEmail(email)) {
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Please enter a valid email!'});
            return;
        }

        this.messageService.add({severity: 'success', summary: 'Registration Successfully', detail: 'Welcome to our website!'});

        // go to home page
        setTimeout(() => window.location.href = '/', 1200);
    }
}
