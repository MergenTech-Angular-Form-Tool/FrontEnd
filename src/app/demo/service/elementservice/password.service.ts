import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Passwordfield} from '../../domain/elements/passwordfield';

@Injectable({
    providedIn: 'root'
})
export class PasswordService {

    constructor(private httpClient: HttpClient, @Inject('url') private url: string) {
    }

    GetAll() {
        return this.httpClient.get(this.url + 'api/passwordinput/getAll');
    }

    PostAdd(password: Passwordfield) {
        return this.httpClient.post<Passwordfield>(this.url + 'api/passwordinput/', password);
    }

    Remove(id: number) {
        return this.httpClient.delete(this.url + 'api/passwordinput/remove/' + id);
    }

    PutUpdate(password: Passwordfield) {
        return this.httpClient.put(this.url + 'api/passwordinput/', password);
    }

}
