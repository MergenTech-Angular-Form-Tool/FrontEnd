import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileelement',
  templateUrl: './fileelement.component.html',
  styleUrls: ['./fileelement.component.scss']
})
export class FileelementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
    }
}
