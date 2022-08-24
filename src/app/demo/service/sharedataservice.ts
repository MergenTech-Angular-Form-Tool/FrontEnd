import {BehaviorSubject, Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class SharedDataService {

    sharedData: any;
    sharedData2: any;

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
    setData2(data: any){
        this.sharedData2 = data;
    }

    getData2() {
        return this.sharedData2;
    }
}
