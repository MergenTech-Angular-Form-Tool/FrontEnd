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
import {MiddleElementsService} from '../../demo/service/middleelementsservice';
import {NoItemService} from '../../demo/service/noitemservice';
import {ChangeDateService} from '../../demo/service/changedateservice';

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

    // tslint:disable-next-line:no-output-on-prefix
    @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
    collapsed = false;
    screenWidth = 0;
    @Input() entry: any;
    state: { id: number } = {
        id: 0
    };
    entryComponents = [];

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

    constructor(private resolver: ComponentFactoryResolver, private middle: MiddleElementsService, private noItem: NoItemService,
                private change: ChangeDateService) {
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
            this.entryComponents.push(TextfieldelementComponent);
        } else if (open === 'Checkbox') {
            factory = this.resolver.resolveComponentFactory(CheckboxelementComponent);
            name = 'Checkbox';
            this.entryComponents.push(CheckboxelementComponent);
        } else if (open === 'Date') {
            factory = this.resolver.resolveComponentFactory(DateelementComponent);
            name = 'Date';
            this.entryComponents.push(DateelementComponent);
        } else if (open === 'Date with time') {
            factory = this.resolver.resolveComponentFactory(DatetimeelementComponent);
            name = 'Datetime';
            this.entryComponents.push(DatetimeelementComponent);
        } else if (open === 'Email') {
            factory = this.resolver.resolveComponentFactory(MailelementComponent);
            name = 'Email';
            this.entryComponents.push(MailelementComponent);
        } else if (open === 'File') {
            factory = this.resolver.resolveComponentFactory(FileelementComponent);
            name = 'File';
            this.entryComponents.push(FileelementComponent);
        } else if (open === 'Number') {
            factory = this.resolver.resolveComponentFactory(NumberelementComponent);
            name = 'Number';
            this.entryComponents.push(NumberelementComponent);
        } else if (open === 'Password') {
            factory = this.resolver.resolveComponentFactory(PasswordelementComponent);
            name = 'Password';
            this.entryComponents.push(PasswordelementComponent);
        } else if (open === 'Range') {
            factory = this.resolver.resolveComponentFactory(RangeelementComponent);
            name = 'Range';
            this.entryComponents.push(RangeelementComponent);
        }
        const componentRef = this.entry.createComponent(factory);
        this.increment();
        componentRef.location.nativeElement.id = name + '_' + this.state.id;

        this.middle.changeMessage(document.getElementById('center'));

        this.noItem.set(false);

        this.change.set(Date.now());
    }

    increment() {
        this.state.id++;
    }
}
