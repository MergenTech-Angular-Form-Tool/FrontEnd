import {Component, OnInit} from '@angular/core';
import {FormNameService} from '../../../../demo/service/formnameservice';

@Component({
    selector: 'app-formsettings',
    templateUrl: './formsettings.component.html',
    styleUrls: ['./formsettings.component.scss']
})
export class FormsettingsComponent implements OnInit {

    value1: string;
    value7: any;
    durum: any[];

    constructor(private form: FormNameService) {
        form.currentMessage.subscribe(message => this.value1 = message);
    }

    ngOnInit(): void {
        this.durum = [
            {name: 'Etkinleştir ', code: '0'},
            {name: 'Devre dışı bırak ', code: '1'},
        ];
    }

    changeFormName() {
        this.form.setFormName(this.value1);
    }
}
