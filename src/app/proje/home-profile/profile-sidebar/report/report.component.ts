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
        const showDiv = document.getElementById('report');
        if (showDiv.style.display === 'none') {
            showDiv.style.display = 'block';
            this.formLabels = [];
            document.getElementById('report').style.display = '';
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
                        data: [65, 59, 80, 30]
                    },
                    {
                        label: 'Cevap veren kişi',
                        backgroundColor: '#FFA726',
                        data: [28, 48, 40, 15]
                    }
                ]
            };
        } else {
            showDiv.style.display = 'none';
        }
    }
}
