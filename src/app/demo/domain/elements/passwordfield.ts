import {BaseElement} from './baseElement';

export interface Passwordfield extends BaseElement {
    id?: number;
    q?: string;
    placeholder?: string;
    formId: number;
}
