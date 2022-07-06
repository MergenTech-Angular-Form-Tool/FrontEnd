import {Component, OnInit} from '@angular/core';
import {Singleton} from '../../utilities/singleton';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    hide = true;
    formGroup: FormGroup;

    constructor(private messageService: MessageService) {
    }

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            password: new FormControl('', [Validators.required]),
            surname: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
        });
    }

    profile(name: string, surname: string, email: string, pass: string, passConfirm: string) {

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

        this.messageService.add({
            severity: 'success',
            summary: 'Profile Update Successfully',
            detail: 'Welcome to our website!'
        });

        // go to home page
        setTimeout(() => window.location.href = '/', 1200);
    }
}
