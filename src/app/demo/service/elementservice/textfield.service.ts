import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TextField} from '../../domain/elements/textField';

@Injectable({
  providedIn: 'root'
})
export class TextfieldService {

  constructor(private httpClient: HttpClient, @Inject('url') private url: string) { }

    GetAll() {
        return this.httpClient.get(this.url + 'api/textinput/getAll');
    }

    PostAdd(textfield: TextField) {
        return this.httpClient.post(this.url + 'api/textinput/', textfield);
    }

    Remove(id: number) {
        return this.httpClient.delete(this.url + 'api/textinput/remove/' + id);
    }

    PutUpdate(textfield: TextField) {
        return this.httpClient.put(this.url + 'api/textinput/', textfield);
    }
}
