import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formsettings',
  templateUrl: './formsettings.component.html',
  styleUrls: ['./formsettings.component.scss']
})
export class FormsettingsComponent implements OnInit {
    value1: string;
    value7: any;
    durum: any[];
  constructor() { }

  ngOnInit(): void {
      this.durum = [
          {name: 'Etkin duruma geçir ', code: '0'},
          {name: 'Devre dışı bırak ', code: '1'},
      ];
  }

}
