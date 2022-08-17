import {Component, OnInit} from '@angular/core';
import {CheckboxService} from '../../../../demo/service/elementservice/checkbox.service';
import {Deneme} from '../../../../demo/domain/elements/deneme';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

    constructor(private checkboxService: CheckboxService) {
    }

    checkboxList: Deneme[];
    checkbox: Deneme = {
        id: 199,
        question: 'CCCCCCCCCCCCCCCCCCCC',
        sequenceNumberForLocation: 1,
        formId: 2,
        createTimestamp: '2022-08-17T06:37:22.928+00:00',
        updateTimestamp: '2022-08-17T06:37:22.928+00:00'
    };

    ngOnInit(): void {
    }

    GetAll() {
        this.checkboxService.GetAll().subscribe((response: Deneme[]) => this.checkboxList = response);
    }

    postData() {
        this.checkboxService.postData(this.checkbox).subscribe((response: any) => {
            console.log(response);
        });
    }

    deleteData(id: number) {
        this.checkboxService.deleteData(id).subscribe(response => {
            alert(response);
            this.GetAll();
        });
    }

    updateData(deneme: Deneme) {
        const updateCheckbox: Deneme = {
            id: deneme.id,
            question: 'BBBBBBBBBBBBBBBBB',
            sequenceNumberForLocation: 1,
            formId: 2,
            createTimestamp: '2022-08-17T06:37:22.928+00:00',
            updateTimestamp: '2022-08-17T06:37:22.928+00:00'
        };
        this.checkboxService.updateData(updateCheckbox).subscribe((response: Deneme) => {
            if (response) {
                this.GetAll();
                this.checkbox = response;
            }
        });
    }

}
