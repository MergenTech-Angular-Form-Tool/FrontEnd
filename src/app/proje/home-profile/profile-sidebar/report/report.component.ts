import {Component, OnInit} from '@angular/core';
import {FormService} from '../../../../demo/service/form.service';
import {Form} from '../../../../demo/domain/form';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

    form: Form[];
    formLabels: string[] = [];
    formLength: number;

    basicData: any;
    basicOptions: any;

    constructor(private formService: FormService) {
    }

    ngOnInit(): void {
        this.formService.getFormsAll().subscribe(response => {
            this.form = response;
            this.formLength = response.length;
        });
    }

    show() {
        this.formLabels = [];
        const showReport = document.getElementById('report');
        if (showReport.style.display === 'none') {
            showReport.style.display = 'block';
        } else {
            showReport.style.display = 'none';
        }
        this.formLength = this.form.length;
        for (const form1 of this.form) {
            this.formLabels.push(form1.formName);
        }
        this.basicData = {
            labels: this.formLabels,
            datasets: [
                {
                    label: 'İletilen kişi',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80]
                },
                {
                    label: 'Cevap veren kişi',
                    backgroundColor: '#FFA726',
                    data: [28, 48, 40]
                }
            ]
        };
        console.log(this.form);
    }
}
