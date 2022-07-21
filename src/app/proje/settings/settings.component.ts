import {Component, ComponentFactoryResolver, Input, OnInit} from '@angular/core';
import {FormsettingsComponent} from '../formsettings/formsettings.component';
import {EmailsettingsComponent} from '../emailsettings/emailsettings.component';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    state: { id: number } = {
        id: 0
    };
    @Input() entry: any;

    constructor(private resolver: ComponentFactoryResolver) {
    }

    ngOnInit(): void {

    }

    add(open: string) {
        let name = '';
        let factory: any;
        if (open === 'Form Settings') {
            factory = this.resolver.resolveComponentFactory(FormsettingsComponent);
            name = 'Form Settings';
        } else if (open === 'Email Settings') {
            factory = this.resolver.resolveComponentFactory(EmailsettingsComponent);
            name = 'Email Setttings';
        }
        const componentRef = this.entry.createComponent(factory);
        this.increment();
        componentRef.location.nativeElement.id = name + '_' + this.state.id;

    }

    increment() {
        this.state.id++;
    }
}
