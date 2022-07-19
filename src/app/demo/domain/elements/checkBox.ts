import {BaseElement} from './baseElement';

export interface CheckBox extends BaseElement {
    id: string;
    header: string;
    required: string;
    options: string;
}
