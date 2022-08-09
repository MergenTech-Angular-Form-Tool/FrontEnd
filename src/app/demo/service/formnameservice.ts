import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class FormNameService {

    constructor() {
    }

    public editDataDetails = 'Form';
    private messageSource = new BehaviorSubject(this.editDataDetails);
    currentMessage = this.messageSource.asObservable();

    setFormName(message: string) {
        this.messageSource.next(message);
    }
}
