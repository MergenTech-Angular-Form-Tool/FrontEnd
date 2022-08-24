import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbercontent',
  templateUrl: './numbercontent.component.html',
  styleUrls: ['./numbercontent.component.scss']
})
export class NumbercontentComponent implements OnInit {
    id: number;
    val: number;
    header: string;
    min: number;

  constructor() { }

  ngOnInit(): void {
  }

}
