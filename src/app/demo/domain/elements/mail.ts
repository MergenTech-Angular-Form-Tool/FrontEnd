import {BaseElement} from './baseElement';

export interface Mail extends BaseElement {
    id: number;
    header: string;
    subtext: string;
    placeholder: string;
    checked: string;
    sequenceNumberForLocation: number;
    formId: number;
    emailInputId: string;
    question: string;
    detail: string;
    elementName: 'mail';
}
