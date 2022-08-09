import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Singleton} from '../../utilities/singleton';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessageService} from 'primeng/api';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UpdateUser} from '../../demo/domain/updateuser';
import {baseUrl} from '../../demo/domain/baseurl';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterContentInit {
    hide = true;
    formGroup: FormGroup;

    constructor(private messageService: MessageService, private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            passConfirm: new FormControl('', Validators.required),
            pass: new FormControl('', [Validators.required]),
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

        this.http.put<UpdateUser>(baseUrl + 'api/user', {
            name: this.formGroup.get('name').value,
            surname: this.formGroup.get('surname').value,
            email: this.formGroup.get('email').value,
            password: this.formGroup.get('pass').value,
            confirmPassword: this.formGroup.get('passConfirm').value
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).subscribe(
            (res: any) => {
                if (res.status === '200') {
                    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Profile updated!'});
                    this.clear();
                }
            },
            (err: any) => {
                this.messageService.add({severity: 'error', summary: 'Error', detail: 'Profile not updated!'});
            });

    }

    ngAfterContentInit(): void {
        this.http.get(baseUrl + 'api/user', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).subscribe(
            (res: any) => {
                this.formGroup.get('name').setValue(res.data.name);
                this.formGroup.get('surname').setValue(res.data.surname);
                this.formGroup.get('email').setValue(res.data.email);
            },
            (err: any) => {
                this.router.navigate(['/login']);
            }
        );

    }

    clear() {
        this.formGroup.get('pass').setValue('');
        this.formGroup.get('passConfirm').setValue('');
    }
}
