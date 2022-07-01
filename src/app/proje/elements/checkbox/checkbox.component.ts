import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
    checked: string;
    detail: string;
    value = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
