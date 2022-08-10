import {Component, OnInit} from '@angular/core';
import {Singleton} from '../../utilities/singleton';
import {MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {RegisterResponse} from '../../demo/domain/auth/registerresponse';
import {Router} from '@angular/router';
import {baseUrl} from '../../demo/domain/baseurl';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    hide = true;
    formGroup: FormGroup;

    constructor(private messageService: MessageService, private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            passwordConfirm: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            surname: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
        });
    }

    register(name: string, surname: string, email: string, pass: string, passConfirm: string) {
        const symbol = '*|,:<>[]{}`;()@&$#%!+-"/';
        let isThereSymbol = false;
        for (let i = 0; i < pass.length; i++) {
            if (symbol.indexOf(pass.charAt(i)) !== -1) {
                isThereSymbol = true;
            }
        }

        if (name === '' || surname === '' || email === '' || pass === '' || passConfirm === '') {
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Some fields are empty!'});
            return;
        }
        if (pass.length < 6) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Password must be 6 characters or greater!'
            });
            return;
        }
        if (pass.search(/[a-z]/) < 0) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Password must contain at least one lowercase letter!'
            });
            return;
        }
        if (pass.search(/[A-Z]/) < 0) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Password must contain at least one uppercase letter!'
            });
            return;
        }
        if (pass.search(/[0-9]/) < 0) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Password must contain at least one number!'
            });
            return;
        }
        if (isThereSymbol === false) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'The password must contain at least one symbol!'
            });
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

        this.http.post(baseUrl + 'auth/register', {
            name: this.formGroup.get('name').value,
            surname: this.formGroup.get('surname').value,
            email: this.formGroup.get('email').value,
            password: this.formGroup.get('password').value,
            confirmPassword: this.formGroup.get('passwordConfirm').value
        }).subscribe(
            (res: RegisterResponse) => {
                if (res.status === '200') {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Registration Successfully',
                        detail: 'Welcome to our website!'
                    });
                    setTimeout(() => this.router.navigate(['/login']), 1200);

                }
            },
            (err: any) => {
                if (err.error.error.includes('users_user_email_key')) {
                    this.messageService.add({severity: 'error', summary: 'Email is already registered!'});
                } else {
                    alert('Error: ' + err.error);
                }
            }
        );
    }
}
