import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datecontent',
  templateUrl: './datecontent.component.html',
  styleUrls: ['./datecontent.component.scss']
})
export class DatecontentComponent implements OnInit {
    id: number;
    header: string;
    selected: string;
    sequenceNumberForLocation: number;
    formId: number;
    dateInputId: string;
    title: string;
    hide: string;
    dateFormat: string;
    dateValue: string;

  constructor() { }

  ngOnInit(): void {
      this.header  = 'girilen header gelecek. ';
  }

}
