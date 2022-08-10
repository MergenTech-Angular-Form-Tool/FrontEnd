import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profilnav',
  templateUrl: './profilnav.component.html',
  styleUrls: ['./profilnav.component.scss']
})
export class ProfilnavComponent implements OnInit {



    constructor(private messageService: MessageService, private router: Router) {
    }


    ngOnInit(): void {

    }
}
