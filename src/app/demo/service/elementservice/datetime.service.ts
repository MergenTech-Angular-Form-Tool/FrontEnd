import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Date} from '../../domain/elements/date';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor(private httpClient: HttpClient, @Inject('url') private url: string) { }

    GetAll() {
        return this.httpClient.get(this.url + 'api/datetimeinput/getAll');
    }

    // tslint:disable-next-line:variable-name
    PostAdd(date: Date) {
        return this.httpClient.post(this.url + 'api/datetimeinput/', date);
    }

    Remove(id: number) {
        return this.httpClient.delete(this.url + 'api/datetimeinput/remove/' + id);
    }

    // tslint:disable-next-line:variable-name
    PutUpdate( date: Date) {
        return this.httpClient.put(this.url + 'api/datetimeinput/', date);
    }

}
