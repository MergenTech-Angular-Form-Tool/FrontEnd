import {BaseElement} from './baseElement';

export interface Divider extends BaseElement {
    id: number;
    color: string;
    style: string;
    height: string;
    marginBot: string;
    marginTop: string;
    space: string;
    sequenceNumberForLocation: number;
    formId: number;
    separatorId: null;
    elementName: 'range';
}
