import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
    val: number;
    selectedValue: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
