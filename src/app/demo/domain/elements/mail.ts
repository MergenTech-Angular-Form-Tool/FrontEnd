import {BaseElement} from "./baseElement";

export interface Mail extends BaseElement {
    id: string;
    header: string;
    subtext: string;
    placeholder: string;
    checked:boolean;
}
