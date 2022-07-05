import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormElementService} from '../../demo/service/formElementService';

@Component({
    selector: 'app-dragdrop',
    templateUrl: './dragdrop.component.html',
    styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit {

    selectedItems: any[] = [];
    @ViewChild('temp', {read: ViewContainerRef}) entry: ViewContainerRef;

    constructor(private formElementService: FormElementService, private resolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
    }

}
