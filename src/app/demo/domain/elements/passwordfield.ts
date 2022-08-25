import {BaseElement} from './baseElement';

export interface Passwordfield extends BaseElement {
    id?: number;
    question?: string;
    placeholder?: string;
    sequenceNumberForLocation: number;
    formId: number;
    elementName: 'password';
}
