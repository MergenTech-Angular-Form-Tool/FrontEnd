import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
    basicData: any;

    basicOptions: any;

    constructor() {
    }

    ngOnInit(): void {
        this.basicData = {
            labels: ['Form1', 'Form2', 'Form3', 'Form4', 'Form5', 'Form6', 'Form7'],
            datasets: [
                {
                    label: 'İletilen kişi',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Cevap veren kişi',
                    backgroundColor: '#FFA726',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

    }
}
