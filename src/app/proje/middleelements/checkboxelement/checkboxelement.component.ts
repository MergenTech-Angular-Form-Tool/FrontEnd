import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxelement',
  templateUrl: './checkboxelement.component.html',
  styleUrls: ['./checkboxelement.component.scss']
})
export class CheckboxelementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    delete($event: any) {
        $event.currentTarget.parentElement.parentElement.parentElement.parentElement.remove();
    }
}
