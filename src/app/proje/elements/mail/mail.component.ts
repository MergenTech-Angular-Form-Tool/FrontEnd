import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
    checked: string;
    detail: string;
    val2 = 15;
  constructor() { }

  ngOnInit(): void {
  }

}
