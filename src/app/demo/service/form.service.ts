import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Form} from '../domain/form';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private httpClient: HttpClient, @Inject('url') private url: string) { }
    id?: number;
    formName?: string;
    userId?: number;
    favorite?: boolean;


    getFormsAll() {
        return this.httpClient.get<Form[]>(this.url + 'api/form/getAll');
    }

    PostAdd(form: Form) {
        return this.httpClient.post(this.url + 'api/form', form);
    }

    updateForm(form: Form) {
        return this.httpClient.put(this.url + 'api/form', form);
    }
}
