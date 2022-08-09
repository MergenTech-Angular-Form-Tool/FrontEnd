import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharecomponent',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
    placeholder = 'http://localhost:4200/#/publish';

  constructor() { }

  ngOnInit(): void {
  }

    onShare() {

    }
}
