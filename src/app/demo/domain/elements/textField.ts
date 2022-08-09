import {BaseElement} from './baseElement';

export interface TextField extends BaseElement {
    id: string;
    header: string;
    subtext: string;
    placeholder: string;
}
