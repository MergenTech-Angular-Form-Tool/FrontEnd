import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Divider} from '../../domain/elements/divider';


@Injectable({
  providedIn: 'root'
})
export class DividerService {

  constructor(private httpClient: HttpClient, @Inject('url') private url: string) { }


    GetAll() {
        return this.httpClient.get(this.url + 'api/separator/getAll');
    }

    PostAdd(divider: Divider) {
        return this.httpClient.post(this.url + 'api/separator/', divider);
    }

    Remove(id: number) {
        return this.httpClient.delete(this.url + 'api/separator/remove/' + id);
    }

    PutUpdate(divider: Divider) {
        return this.httpClient.put(this.url + 'api/separator/', divider);
    }

}
