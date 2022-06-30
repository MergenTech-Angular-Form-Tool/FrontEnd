import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../demo/service/productservice';
import {FormElementService} from '../../demo/service/formElementService';
import {FormElement} from '../../demo/domain/formElement';

@Component({
    selector: 'app-dragdrop',
    templateUrl: './dragdrop.component.html',
    styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit {

    formElements: FormElement[];
    selectedElements: FormElement[];
    draggedElement: FormElement;

    constructor(private productService: ProductService, private formElementService: FormElementService) {

    }

    ngOnInit() {
        this.selectedElements = [];
        this.formElementService.getElements().then(elements => this.formElements = elements);
    }

    dragStartElement(element: FormElement) {
        this.draggedElement = element;
    }

    dropElement() {
        if (this.draggedElement) {
            this.selectedElements = [...this.selectedElements, this.draggedElement];
            this.draggedElement = null;
        }
    }

    dragEndElement() {
        this.draggedElement = null;
    }

}
