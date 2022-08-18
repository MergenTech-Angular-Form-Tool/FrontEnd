import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CheckBox} from '../../domain/elements/checkBox';

@Injectable()
export class CheckboxService {

  constructor( private httpClient: HttpClient, @Inject('url') private url: string ) { }


    GetAll() {
        return this.httpClient.get(this.url + 'api/checkbox/getAll');
    }

    PostAdd(checkbox: CheckBox) {
        return this.httpClient.post(this.url + 'api/checkbox', checkbox);
    }

    Remove(id: number) {
        return this.httpClient.delete(this.url + 'api/checkbox/remove/' + id);
    }

    PutUpdate(checkbox: CheckBox) {
        return this.httpClient.put(this.url + 'api/checkbox', checkbox);
    }
}
