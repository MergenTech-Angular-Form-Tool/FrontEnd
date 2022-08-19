import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetFormService {

  constructor(private httpClient: HttpClient, @Inject('url') private url: string) { }

    GetAll() {
        return this.httpClient.get(this.url + 'api/checkbox/getAll');
    }

}
