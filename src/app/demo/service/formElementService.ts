import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FormElementService {

    constructor(private http: HttpClient) { }

    getElements() {
        return this.http.get<any>('assets/demo/data/form-elements.json')
            .toPromise()
            .then(data => data);
    }
}
