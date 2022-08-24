import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailcontent',
  templateUrl: './mailcontent.component.html',
  styleUrls: ['./mailcontent.component.scss']
})
export class MailcontentComponent implements OnInit {
    message: string;
    placeholder: string;
    header: string;
    smalltext: string;
    id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
