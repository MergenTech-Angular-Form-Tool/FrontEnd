import {BaseElement} from './baseElement';

export interface TextField extends BaseElement {
    id: number;
    sequenceNumberForLocation: number;
    formId: number;
    textInputId: null;
    question: string;
    placeholder: string;
    header: string;
    subtext: string;
    change: string ;
    elementName: 'textfield';
}
