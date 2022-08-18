import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

    formname: string;
    formid: number;
    lastdate: number;

  constructor() { }

    getFormsmall(){
        // tslint:disable-next-line:no-unused-expression
      return this.formname, this.formid, this.lastdate;
    }
}
