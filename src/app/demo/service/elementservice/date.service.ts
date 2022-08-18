import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Date} from '../../../demo/domain/elements/date';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(private httpClient: HttpClient, @Inject('url') private url: string) { }

    GetAll() {
        return this.httpClient.get(this.url + 'api/dateinput/getAll');
    }

    // tslint:disable-next-line:variable-name
    PostAdd(date: Date) {
        return this.httpClient.post(this.url + 'api/dateinput/', date);
    }

    Remove(id: number) {
        return this.httpClient.delete(this.url + 'api/dateinput/remove/' + id);
    }

    // tslint:disable-next-line:variable-name
    PutUpdate( date: Date) {
        return this.httpClient.put(this.url + 'api/dateinput/', date);
    }
}
