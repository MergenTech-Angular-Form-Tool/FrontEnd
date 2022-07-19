import {Component, OnInit} from '@angular/core';
import {SaveService} from '../../../demo/service/saveservice';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';

@Component({
    selector: 'app-textfield',
    templateUrl: './textfield.component.html',
    styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {
    constructor(private save: SaveService, private share: SharedDataService, private getElement: GetElementDetailsService) {
    }

    value1: any;
    question: string;
    placeholder: string;
    subtext: string;
    message: string;
    id: string;

    ngOnInit(): void {
        this.save.currentMessage.subscribe(message => this.message = message);
        this.share.currentMessage.subscribe(id => this.id = id);
    }

    onSubmit() {

        this.getElement.changeMessage({
            id: this.id,
            header: this.question,
            subtext: this.subtext,
            placeholder: this.placeholder
        });


    }


}
