import {BaseElement} from './baseElement';

export interface NumberObject extends BaseElement {
    id: string;
    header: string;
    defaultValue: number;
    isNegative: boolean;
}
