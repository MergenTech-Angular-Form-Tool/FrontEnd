import {BaseElement} from './baseElement';

export interface FileUpload extends BaseElement {
    id: number;
    header: string;
    sequenceNumberForLocation: number;
    formId: number;
    fileInputId: string;
    elementName: 'file';
}
