import { Component, OnInit } from '@angular/core';
import {SaveService} from "../../../demo/service/saveservice";
import {SharedDataService} from "../../../demo/service/sharedataservice";
import {GetElementDetailsService} from "../../../demo/service/getElementDetailsService";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
    checked: string;
    detail: string;
    val2 = 15;
    question: string;
    placeholder: string;
    subtext: string;
    id: string;
  constructor(private save: SaveService, private share: SharedDataService, private getElement: GetElementDetailsService) { }

  ngOnInit(): void {
      this.share.currentMessage.subscribe(id => this.id = id);
  }
    onSubmit() {
        // this.save.changeMessage(this.question);
        // const element = document.getElementById(this.id);
        // console.log(element.firstChild.firstChild.nextSibling.nextSibling.firstChild.firstChild.);
        // tslint:disable-next-line:max-line-length
        // element.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerHTML = this.message;
        //
        // this.save.sendClickEvent();
        // console.log(this.question, this.subtext, this.placeholder);

        this.getElement.changeMessage({
            id: this.id,
            checked: this.checked,
            detail:this.detail,
            val2: this.val2,
            header: this.question,
            subtext: this.subtext,
            placeholder: this.placeholder
        });


    }


}
