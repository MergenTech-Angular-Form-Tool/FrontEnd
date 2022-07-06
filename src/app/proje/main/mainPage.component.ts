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
    id = 0;

    constructor(private formElementService: FormElementService, private resolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.increment();
    }

    show() {
        alert(this.id);
    }

    increment() {
        console.log('asdasd');
        this.id++;
    }
}
