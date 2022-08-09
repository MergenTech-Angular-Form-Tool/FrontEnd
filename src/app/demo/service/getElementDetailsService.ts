import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';
import {BaseElement} from '../domain/elements/baseElement';

@Injectable()
export class GetElementDetailsService {

    constructor() {
    }

    public editDataDetails: BaseElement = {};
    private messageSource = new BehaviorSubject(this.editDataDetails);
    currentMessage = this.messageSource.asObservable();

    changeMessage(message: BaseElement) {
        this.messageSource.next(message);
    }
}
