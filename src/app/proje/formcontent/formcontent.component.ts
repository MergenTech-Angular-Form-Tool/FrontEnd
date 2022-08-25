import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {FormService} from '../../demo/service/form.service';
import {CheckboxService} from '../../demo/service/elementservice/checkbox.service';
import {DatetimeService} from '../../demo/service/elementservice/datetime.service';
import {DateService} from '../../demo/service/elementservice/date.service';
import {DividerService} from '../../demo/service/elementservice/divider.service';
import {FileuploadService} from '../../demo/service/elementservice/fileupload.service';
import {MailService} from '../../demo/service/elementservice/mail.service';
import {NumberService} from '../../demo/service/elementservice/number.service';
import {PasswordService} from '../../demo/service/elementservice/password.service';
import {TextfieldService} from '../../demo/service/elementservice/textfield.service';
import {SharedDataService} from '../../demo/service/sharedataservice';
import {ChangeDateService} from '../../demo/service/changedateservice';

@Component({
    selector: 'app-formcontent',
    templateUrl: './formcontent.component.html',
    styleUrls: ['./formcontent.component.scss']
})
export class FormcontentComponent implements OnInit {

    arr: any[] = [];
    data: any;
    data2: any;
    arr2: any[] = [];

    constructor(private checkboxService: CheckboxService, private dateTimeService: DatetimeService,
                private dateService: DateService, private dividerService: DividerService,
                private fileuploadService: FileuploadService, private mailService: MailService,
                private numberService: NumberService, private passwordService: PasswordService,
                private textfielService: TextfieldService, private formService: FormService,
                private sharedDataService: SharedDataService) {
    }

    async ngOnInit() {
        this.data = this.sharedDataService.getData();
        this.data2 = this.sharedDataService.getData2();


        this.checkboxService.GetAll().subscribe(value => {
            this.arr.push(value);
        });

        this.dateTimeService.GetAll().subscribe(value => {
            this.arr.push(value);
        });

        this.dateService.GetAll().subscribe(value => {
            this.arr.push(value);
        });
        this.dividerService.GetAll().subscribe(value => {
            this.arr.push(value);
        });
        this.fileuploadService.GetAll().subscribe(value => {
            this.arr.push(value);
        });
        this.mailService.GetAll().subscribe(value => {
            this.arr.push(value);
        });
        this.numberService.GetAll().subscribe(value => {
            this.arr.push(value);
        });
        this.passwordService.GetAll().subscribe(value => {
            this.arr.push(value);
        });
        this.textfielService.GetAll().subscribe(value => {
            this.arr.push(value);
        });
    }

    addtoarr2(element){
        this.arr2.push(element);
    }

}
