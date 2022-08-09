import {Component, OnInit} from '@angular/core';
import {SaveService} from '../../../demo/service/saveservice';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {ChangeDateService} from '../../../demo/service/changedateservice';

@Component({
    selector: 'app-textfield',
    templateUrl: './textfield.component.html',
    styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {

    value1: any;
    question: string;
    placeholder: string;
    subtext: string;
    message: string;
    id: string;

    constructor(private save: SaveService, private share: SharedDataService, private getElement: GetElementDetailsService,
                private date: ChangeDateService) {
    }

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

        this.date.set(Date.now());
    }


}
