import {Component, OnInit} from '@angular/core';
import {GetElementDetailsService} from '../../../demo/service/getElementDetailsService';
import {SharedDataService} from '../../../demo/service/sharedataservice';
import {ChangeDateService} from '../../../demo/service/changedateservice';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
    id: string;
    header: string;
    required: string;
    options: string;

    constructor(private getElement: GetElementDetailsService, private share: SharedDataService,
                private date: ChangeDateService) {
    }

    ngOnInit(): void {
        this.share.currentMessage.subscribe(id => this.id = id);
    }

    onSubmit() {
        this.getElement.changeMessage({
            id: this.id,
            header: this.header,
            required: this.required,
            options: this.options,
        });

        this.date.set(Date.now());
    }
}
