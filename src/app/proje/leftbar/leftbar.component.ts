import {Component, ComponentFactoryResolver, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
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
    @Input() entry: any;
    state: { id: number } = {
        id: 0
    };

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

    constructor(private resolver: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;
    }

    add(open: string) {

        let name = '';
        let factory: any;
        if (open === 'Text Field') {
            factory = this.resolver.resolveComponentFactory(TextfieldelementComponent);
            name = 'Text Field';
        } else if (open === 'Checkbox') {
            factory = this.resolver.resolveComponentFactory(CheckboxelementComponent);
            name = 'Checkbox';
        } else if (open === 'Date') {
            factory = this.resolver.resolveComponentFactory(DateelementComponent);
            name = 'Date';
        } else if (open === 'Date with time') {
            factory = this.resolver.resolveComponentFactory(DatetimeelementComponent);
            name = 'Datetime';
        } else if (open === 'Email') {
            factory = this.resolver.resolveComponentFactory(MailelementComponent);
            name = 'Email';
        } else if (open === 'File') {
            factory = this.resolver.resolveComponentFactory(FileelementComponent);
            name = 'File';
        } else if (open === 'Number') {
            factory = this.resolver.resolveComponentFactory(NumberelementComponent);
            name = 'Number';
        } else if (open === 'Password') {
            factory = this.resolver.resolveComponentFactory(PasswordelementComponent);
            name = 'Password';
        } else if (open === 'Range') {
            factory = this.resolver.resolveComponentFactory(RangeelementComponent);
            name = 'Range';
        }
        const componentRef = this.entry.createComponent(factory);
        this.increment();
        componentRef.location.nativeElement.id = name + '_' + this.state.id;
    }

    increment() {
        this.state.id++;
    }
}
