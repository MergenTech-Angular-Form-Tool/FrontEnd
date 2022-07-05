import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FormElementService} from '../../demo/service/formElementService';

@Component({
    selector: 'app-main',
    templateUrl: './mainPage.component.html',
    styleUrls: ['./mainPage.component.scss']
})
export class MainPageComponent implements OnInit {

    selectedItems: any[] = [];
    @ViewChild('temp', {read: ViewContainerRef}) entry: ViewContainerRef;

    constructor(private formElementService: FormElementService, private resolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
    }

}
