import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwordcontent',
  templateUrl: './passwordcontent.component.html',
  styleUrls: ['./passwordcontent.component.scss']
})
export class PasswordcontentComponent implements OnInit {
    id: number;
    q: string;
    placeholder: string;

  constructor() { }

  ngOnInit(): void {
  }

}
