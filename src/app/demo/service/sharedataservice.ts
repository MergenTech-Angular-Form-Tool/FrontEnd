import {BehaviorSubject, Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class SharedDataService {

    sharedData: any;

    constructor() {
    }


    public editDataDetails: any = [];
    public subject = new Subject<any>();
    private messageSource = new BehaviorSubject(this.editDataDetails);
    currentMessage = this.messageSource.asObservable();

    changeMessage(message: string) {
        this.messageSource.next(message);
    }
    setData(data: any){
        this.sharedData = data;
    }

    getData() {
        return this.sharedData;
    }
}
