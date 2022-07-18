import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable()

export class SaveService {

    private messageSource = new BehaviorSubject('Placeholder');
    currentMessage = this.messageSource.asObservable();
    private subject = new Subject<any>();

    constructor() {}

    changeMessage(message: string){
        this.messageSource.next(message);
    }

    sendClickEvent() {
        this.subject.next();
    }
    getClickEvent(): Observable<any>{
        return this.subject.asObservable();
    }

}
