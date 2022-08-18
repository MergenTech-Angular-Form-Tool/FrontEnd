import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NumberObject} from '../../domain/elements/numberobject';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor(private httpClient: HttpClient, @Inject('url') private url: string) { }

    GetAll() {
        return this.httpClient.get(this.url + 'api/numberinput/getAll');
    }

    // tslint:disable-next-line:variable-name
    PostAdd(number: NumberObject) {
        return this.httpClient.post(this.url + 'api/numberinput/', number);
    }

    Remove(id: number) {
        return this.httpClient.delete(this.url + 'api/numberinput/remove/' + id);
    }

    // tslint:disable-next-line:variable-name
    PutUpdate( number: NumberObject) {
        return this.httpClient.put(this.url + 'api/numberinput/', number);
    }

}
