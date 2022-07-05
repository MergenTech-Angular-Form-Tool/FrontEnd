import {Component, ComponentFactoryResolver, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormElement} from '../../demo/domain/formElement';
import {FormElementService} from '../../demo/service/formElementService';
import {TextfieldComponent} from '../sidebarelements/textfield/textfield.component';

interface SidenavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
    selector: 'app-leftbar',
    templateUrl: './leftbar.component.html',
    styleUrls: ['./leftbar.component.scss']
})

export class LeftbarComponent implements OnInit {

    @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
    collapsed = false;
    screenWidth = 0;
    formElements: FormElement[];
    @Input() selectedItems: any[] = [];
    @Input() entry: any;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 768) {
            this.collapsed = false;
            this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
        }
    }

    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
        this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }

    closeSidenav(): void {
        this.collapsed = false;
        this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }

    constructor(private formElementService: FormElementService, private resolver: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;
        this.formElementService.getElements().then(elements => this.formElements = elements);
    }

    add() {
        const factory = this.resolver.resolveComponentFactory(TextfieldComponent);
        const componentRef = this.entry.createComponent(factory);
    }
}
