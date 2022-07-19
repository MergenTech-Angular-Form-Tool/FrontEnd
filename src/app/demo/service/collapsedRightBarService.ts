import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class CollapsedRightBarService {

    constructor() {
    }

    public editDataDetails = false;
    private messageSource = new BehaviorSubject(this.editDataDetails);
    currentMessage = this.messageSource.asObservable();


    open() {
        this.messageSource.next(true);
        this.editDataDetails = true;
    }

    close() {
        this.messageSource.next(false);
        this.editDataDetails = false;
    }
}
