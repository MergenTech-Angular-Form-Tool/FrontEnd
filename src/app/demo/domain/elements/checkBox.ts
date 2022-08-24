import {BaseElement} from './baseElement';

export interface CheckBox extends BaseElement {
    elementName: 'checkbox';
    id: number;
    sequenceNumberForLocation: number;
    formId: number;
    checkboxId: null;
    header: string;
    required: string;
}
