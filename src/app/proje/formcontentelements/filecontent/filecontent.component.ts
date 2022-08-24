import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filecontent',
  templateUrl: './filecontent.component.html',
  styleUrls: ['./filecontent.component.scss']
})
export class FilecontentComponent implements OnInit {
    id: number;
    header: string;
    sequenceNumberForLocation: number;
    formId: number;
    fileInputId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
