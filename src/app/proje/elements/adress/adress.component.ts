import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.scss']
})
export class AdressComponent implements OnInit {
    category: string;
    selectedCategories: any[] = ['', ''];
    categories: any[] = [{name: 'adres1', key: 'A'}, {name: 'adres2', key: 'B'}, {name: 'İl', key: 'I'}, {name: 'İlçe/Eyalet', key: 'E'}, {name: 'Ülke', key: 'U'}];
    checked = false;
    constructor() { }

  ngOnInit(){
    this.selectedCategories = this.categories.slice(1, 3);
  }

}
