import {Component, OnInit} from '@angular/core';
import {Singleton} from '../../utilities/singleton';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    login(email: string, pass: string) {

        if (email === '' || pass === '') {
            alert('Some fields are empty!');
            return;
        }

        if (!Singleton.validateEmail(email)) {
            alert('Invalid email!');
            return;
        }

        alert('Login successful!');

    }

    gotoHome(){
        this.router.navigate(['/register']);  // define your component where you want to go
    }

}

