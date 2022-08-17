import {BaseElement} from './baseElement';

export interface CheckBox extends BaseElement {
    id: string;
    sequenceNumberForLocation: number;
    header: string;
    required: string;
}
