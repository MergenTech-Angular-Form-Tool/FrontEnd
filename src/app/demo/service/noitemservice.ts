import {BehaviorSubject, Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class NoItemService {

    constructor() {
    }

    public noItem = true;
    public subject = new Subject<any>();
    private messageSource = new BehaviorSubject(this.noItem);
    currentMessage = this.messageSource.asObservable();

    set(flag: boolean) {
        this.messageSource.next(flag);
    }
}
