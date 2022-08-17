import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Deneme} from '../../domain/elements/deneme';
import {Observable} from 'rxjs';

@Injectable()
export class CheckboxService {

    checkbox: Deneme;

    constructor(private httpClient: HttpClient, @Inject('url') private url: string) {
    }

    getId() {
        return this.checkbox.id;
    }

    GetAll() {
        return this.httpClient.get(this.url + 'api/checkbox/getAll');
    }

    postData(deneme: Deneme): Observable<any> {
        return this.httpClient.post<any>(this.url + 'api/checkbox', deneme);
    }

    deleteData(id: number) {
        return this.httpClient.delete(this.url + 'api/checkbox/remove/' + id);
    }

    updateData(deneme: Deneme) {
        return this.httpClient.put(this.url + 'api/checkbox', deneme);
    }

}
