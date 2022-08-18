import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileUpload} from '../../domain/elements/fileUpload';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(private httpClient: HttpClient, @Inject('url') private url: string ) { }


    GetAll() {
        return this.httpClient.get(this.url + 'api/fileinput/getAll');
    }

    PostAdd(fileupload: FileUpload) {
        return this.httpClient.post(this.url + 'api/fileinput/', fileupload);
    }

    Remove(id: number) {
        return this.httpClient.delete(this.url + 'api/fileinput/remove/' + id);
    }

    PutUpdate(fileupload: FileUpload) {
        return this.httpClient.put(this.url + 'api/fileinput/', fileupload);
    }


}
