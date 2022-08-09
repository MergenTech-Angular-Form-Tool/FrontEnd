import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    @Input() entry: any;
    public comp: string;

    constructor() {
    }

    ngOnInit(): void {
        this.comp = 'Form Settings';

    }

    showComponent(comp: string) {
        this.comp = comp;

    }
}
