import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class MiddleElementsService {

    constructor() {
    }

    public editDataDetails: any = [];
    public subject = new Subject<any>();
    private messageSource = new BehaviorSubject(this.editDataDetails);
    currentMessage = this.messageSource.asObservable();

    changeMessage(message: any) {
        this.messageSource.next(message);
    }
}
