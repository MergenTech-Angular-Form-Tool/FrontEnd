import {Component, OnInit} from '@angular/core';
import {SaveService} from '../../../demo/service/saveservice';
import {SharedDataService} from '../../../demo/service/sharedataservice';

@Component({
    selector: 'app-textfield',
    templateUrl: './textfield.component.html',
    styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {
    constructor(private save: SaveService, private share: SharedDataService) { }
    value1: any;
    question: string;
    placeholder: string;
    subtext: string;
    message: string;
    id: string;

    ngOnInit(): void {
        this.save.currentMessage.subscribe(message => this.message = message);
        this.share.currentMessage.subscribe(id => this.id = id );
    }

    onSubmit() {
        this.save.changeMessage(this.question);
        const element = document.getElementById(this.id);
        // console.log(element.firstChild.firstChild.nextSibling.nextSibling.firstChild.firstChild.);
        // tslint:disable-next-line:max-line-length
        element.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerHTML = this.message;

        this.save.sendClickEvent();
        // console.log(this.question, this.subtext, this.placeholder);



    }




}
