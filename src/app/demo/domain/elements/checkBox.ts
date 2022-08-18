import {BaseElement} from './baseElement';

export interface CheckBox extends BaseElement {

    id: number;
    sequenceNumberForLocation: number;
    formId: number;
    checkboxId: null;
    header: string;
    required: string;
}
