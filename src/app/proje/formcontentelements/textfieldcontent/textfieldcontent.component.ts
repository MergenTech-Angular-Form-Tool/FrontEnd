import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textfieldcontent',
  templateUrl: './textfieldcontent.component.html',
  styleUrls: ['./textfieldcontent.component.scss']
})
export class TextfieldcontentComponent implements OnInit {
    message: string;
    placeholder: string;
    header: string;
    smalltext: string;
    change: boolean;
    id: number;


    constructor() { }

  ngOnInit(): void {
  }

}
