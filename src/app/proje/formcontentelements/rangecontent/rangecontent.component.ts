import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rangecontent',
  templateUrl: './rangecontent.component.html',
  styleUrls: ['./rangecontent.component.scss']
})
export class RangecontentComponent implements OnInit {
    id: number;
    color: string;
    style: string;
    height: string;
    marginBot: string;
    marginTop: string;
    space: string;

  constructor() { }

  ngOnInit(): void {
  }

}
