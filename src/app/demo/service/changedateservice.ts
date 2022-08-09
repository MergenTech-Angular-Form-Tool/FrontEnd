import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class ChangeDateService {

    constructor() {
    }

    public date = Date.now();
    private messageSource = new BehaviorSubject(this.date);
    currentMessage = this.messageSource.asObservable();

    set(date: number) {
        this.messageSource.next(date);
    }
}
