import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mail} from '../../domain/elements/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient, @Inject('url') private url: string ) { }

    GetAll() {
        return this.httpClient.get(this.url + 'api/emailinput/getAll');
    }

    PostAdd(mail: Mail) {
        return this.httpClient.post(this.url + 'api/emailinput/', mail);
    }

    Remove(id: number) {
        return this.httpClient.delete(this.url + 'api/emailinput/remove/' + id);
    }

    PutUpdate(mail: Mail) {
        return this.httpClient.put(this.url + 'api/emailinput/', mail);
    }


}
