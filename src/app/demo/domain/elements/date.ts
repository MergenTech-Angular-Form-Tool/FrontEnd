import {BaseElement} from './baseElement';

export interface Date extends BaseElement {
    id: number;
    header: string;
    selected: string;
    sequenceNumberForLocation: number;
    formId: number;
    dateInputId: string;
    title: string;
    hide: string;
    dateFormat: string;
    dateValue: string;
    elementName: string;
}
