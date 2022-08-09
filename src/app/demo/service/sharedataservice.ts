import {BehaviorSubject, Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class SharedDataService {

    constructor() {
    }

    public editDataDetails: any = [];
    public subject = new Subject<any>();
    private messageSource = new BehaviorSubject(this.editDataDetails);
    currentMessage = this.messageSource.asObservable();

    changeMessage(message: string) {
        this.messageSource.next(message);
    }
}
