import { Component, OnInit } from '@angular/core';
import {Date} from "../../../demo/domain/elements/date";

@Component({
  selector: 'app-datetimecontent',
  templateUrl: './datetimecontent.component.html',
  styleUrls: ['./datetimecontent.component.scss']
})
export class DatetimecontentComponent implements OnInit {
    date: Date;
    header: string;
    id: number;
    selected: string;

  constructor() { }

  ngOnInit(): void {
      this.header = 'girilen değer gelcek';
  }

}
