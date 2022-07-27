import { Component, OnInit } from '@angular/core';
import {jsPDF} from 'jspdf';
import domtoimage from 'dom-to-image';
import {MiddleElementsService} from '../../../../demo/service/middleelementsservice';

@Component({
  selector: 'app-pdfcomponent',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  constructor(private middleservice: MiddleElementsService) { }

  ngOnInit(): void {
  }
    toPdf() {

        const dashboard = this.middleservice.currentMessage;
        console.log(dashboard);

        const dashboardHeight = 303;
        const dashboardWidth = 400;
        const options = { background: 'white', width: dashboardWidth, height: dashboardHeight };

        domtoimage.toPng(dashboard, options).then((imgData) => {
            const doc = new jsPDF(dashboardWidth > dashboardHeight ? 'l' : 'p', 'mm', [dashboardWidth, dashboardHeight]);
            const imgProps = doc.getImageProperties(imgData);
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            doc.save('Dashboard for hyperpanels.pdf');
        });
    }

}
