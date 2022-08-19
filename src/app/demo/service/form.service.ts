import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Form} from '../domain/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private httpClient: HttpClient, @Inject('url') private url: string) { }

    getFormsAll() {
        return this.httpClient.get<Form[]>(this.url + 'api/form/getAll');
    }
}
