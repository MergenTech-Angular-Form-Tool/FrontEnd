import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.scss']
})
export class PopupsComponent implements OnInit {
    display = false;
    displayMaximizable: boolean;
    @Input() hero;
    showMaximizableDialog() {
        this.displayMaximizable = true;
    }

    showDialog() {
        this.display = true;
    }


  constructor() { }

  ngOnInit(): void {
  }

}
