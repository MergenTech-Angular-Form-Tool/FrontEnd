import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
    val: number;
    height: number;
    below: number;
    above: number;
    space: number;
  constructor() { }

  ngOnInit(): void {
  }

}
