import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Form} from '../domain/form';


@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(private httpClient: HttpClient, @Inject('url') private url: string) {
    }

    id?: number;
    formName?: string;
    userId?: number;
    favorite?: boolean;
    formElements: any[] = [];

    form: Form;


    getFormsAll() {
        return this.httpClient.get<Form[]>(this.url + 'api/form/getAll');
    }

    PostAdd(form: any[]) {
        return this.httpClient.post<any[]>(this.url + 'api/formwithelements', form);
    }

    updateForm(form: Form) {
        return this.httpClient.put(this.url + 'api/form', form);
    }

    removeForm(id: number) {
        return this.httpClient.delete(this.url + 'api/form/remove/' + id);
    }
    getFormByID(id: number){
        return this.httpClient.get<any[]>(this.url + 'api/formwithelements/get/' + id);
    }
}
