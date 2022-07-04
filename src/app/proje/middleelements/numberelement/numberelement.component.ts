import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numberelement',
  templateUrl: './numberelement.component.html',
  styleUrls: ['./numberelement.component.scss']
})
export class NumberelementComponent implements OnInit {

    val: number;
  constructor() { }

  ngOnInit(): void {
  }

}
