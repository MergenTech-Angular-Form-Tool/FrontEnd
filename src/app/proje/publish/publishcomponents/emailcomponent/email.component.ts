import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emailcomponent',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    open() {
        window.open('mailto:xyz@abc.com');
    }
}
