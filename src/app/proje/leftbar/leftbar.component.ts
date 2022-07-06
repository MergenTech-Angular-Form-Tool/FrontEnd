import {Component, ComponentFactoryResolver, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormElement} from '../../demo/domain/formElement';
import {FormElementService} from '../../demo/service/formElementService';
import {TextfieldelementComponent} from '../middleelements/textfieldelement/textfieldelement.component';
import {CheckboxelementComponent} from '../middleelements/checkboxelement/checkboxelement.component';
import {DateelementComponent} from '../middleelements/dateelement/dateelement.component';
import {PasswordelementComponent} from '../middleelements/passwordelement/passwordelement.component';
import {NumberelementComponent} from '../middleelements/numberelement/numberelement.component';
import {FileelementComponent} from '../middleelements/fileelement/fileelement.component';
import {RangeelementComponent} from '../middleelements/rangeelement/rangeelement.component';
import {DatetimeelementComponent} from '../middleelements/datetimeelement/datetimeelement.component';
import {MailelementComponent} from '../middleelements/mailelement/mailelement.component';

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
    @Input() inc;

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

    add(open: string) {
        this.inc();
        let factory: any;
        if (open === 'Text Field') {
            factory = this.resolver.resolveComponentFactory(TextfieldelementComponent);
        } else if (open === 'Checkbox') {
            factory = this.resolver.resolveComponentFactory(CheckboxelementComponent);
        } else if (open === 'Date') {
            factory = this.resolver.resolveComponentFactory(DateelementComponent);
        } else if (open === 'Date with time') {
            factory = this.resolver.resolveComponentFactory(DatetimeelementComponent);
        } else if (open === 'Email') {
            factory = this.resolver.resolveComponentFactory(MailelementComponent);
        } else if (open === 'File') {
            factory = this.resolver.resolveComponentFactory(FileelementComponent);
        } else if (open === 'Number') {
            factory = this.resolver.resolveComponentFactory(NumberelementComponent);
        } else if (open === 'Password') {
            factory = this.resolver.resolveComponentFactory(PasswordelementComponent);
        } else if (open === 'Range') {
            factory = this.resolver.resolveComponentFactory(RangeelementComponent);
        }
        const componentRef = this.entry.createComponent(factory);
    }
}
