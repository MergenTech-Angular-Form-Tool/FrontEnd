import {BaseElement} from './baseElement';

export interface NumberObject extends BaseElement {
    id: number;
    header: string;
    defaultValue: number;
    isNegative: boolean;
    sequenceNumberForLocation: number;
    formId: number;
    numberInputId: string;
}
