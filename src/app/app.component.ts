import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
    menuMode = 'leftbar';

    darkMode = 'light';

    topbarTheme = 'light';

    menuTheme = 'light';

    inputStyle = 'outlined';

    ripple: boolean;

    constructor(private primengConfig: PrimeNGConfig, private translate: TranslateService) {
        translate.setDefaultLang('tr');
        translate.use('tr');
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
