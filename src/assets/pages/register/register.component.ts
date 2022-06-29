import {Component, OnInit} from '@angular/core';
import {Singleton} from '../../utilities/singleton';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    register(name: string, surname: string, email: string, pass: string, passConfirm: string) {

        if (name === '' || surname === '' || email === '' || pass === '' || passConfirm === '') {
            alert('Please fill all fields');
            return;
        }

        if (pass !== passConfirm) {
            alert('Passwords do not match');
            return;
        }

        if (!Singleton.validateEmail(email)) {
            alert('Please enter a valid email');
            return;
        }

        alert('Registration successful');
        // go to home page


        return;
    }
}
