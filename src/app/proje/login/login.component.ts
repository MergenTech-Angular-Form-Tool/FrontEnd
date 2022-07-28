import {Component, OnInit} from '@angular/core';
import {Singleton} from '../../utilities/singleton';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../../demo/domain/auth/loginresponse';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formGroup: FormGroup;
    hide = true;

    constructor(private router: Router, private messageService: MessageService, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            password: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required])
        });
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

        this.http.post('http://localhost:8080/auth/login', {
            username: email,
            password: pass
        }).subscribe(
            (res: LoginResponse) => {
                if (res.status === '200') {
                    this.messageService.add({severity: 'success', summary: 'Login Successfully', detail: 'Welcome to our website!'});
                    setTimeout(() => window.location.href = '/', 1000);
                    localStorage.setItem('token', res.token);
                }
            },
            (err: any) => {
                if (err.error.error === 'BadCredentials' || err.error.error === 'UserNotFound') {
                    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid email or password!'});
                } else {
                    alert('Something went wrong!');
                }
            });
    }

    gotoHome() {
        this.router.navigate(['/register']);  // define your component where you want to go
    }

}

