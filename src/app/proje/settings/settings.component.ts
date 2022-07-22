import {Component, ComponentFactoryResolver, Input, OnInit} from '@angular/core';
import {FormsettingsComponent} from './settingscomponent/formsettings/formsettings.component';
import {EmailsettingsComponent} from './settingscomponent/emailsettings/emailsettings.component';

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
    public comp: string;

    constructor(private resolver: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        this.comp = 'Share';

    }

    showComponent(comp: string) {
        this.comp = comp;

    }
}
