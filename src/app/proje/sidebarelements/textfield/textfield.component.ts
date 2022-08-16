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

    question: string;
    placeholder: string;
    subtext: string;
    message: string;
    id: string;
    textFieldList = [];

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
        this.textFieldList.push({
            id: this.id,
            header: this.question,
            subtext: this.subtext,
            placeholder: this.placeholder
        });
        // Burada servisle bağlayacağız.
        /*        console.log(this.id,
                    this.question,
                    this.subtext,
                    this.placeholder);*/
        // tslint:disable-next-line:prefer-for-of
/*        console.log(this.textFieldList[0].id);*/
        const json = JSON.stringify(this.textFieldList);
        const jsonSent = JSON.parse(json);
        console.log(jsonSent);
        /*for (const argument of this.textFieldList) {
            console.log(argument.id);
        }*/
        this.date.set(Date.now());
    }


}
