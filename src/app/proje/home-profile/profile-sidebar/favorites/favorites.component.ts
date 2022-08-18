import {Component, OnInit} from '@angular/core';
import {CheckboxService} from '../../../../demo/service/elementservice/checkbox.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

    constructor(private checkboxService: CheckboxService) {
    }

    ngOnInit(): void {
    }

/*    GetAll() {
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
        console.log();
        const updateCheckbox: Deneme = {
            id: 19,
            question: 'Kübra',
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
    }*/

}
