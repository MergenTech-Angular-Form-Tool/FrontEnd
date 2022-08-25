import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {form} from '../../../../demo/domain/form';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrls: ['./home-profile.component.scss']
})
export class HomeProfileComponent implements OnInit {

    form: form[];

  constructor( ) {}

    public comp: string;

  ngOnInit(): void {
      this.comp = 'Allforms';
  }
    showComponent(comp: string) {
        this.comp = comp;
    }
}
