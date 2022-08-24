import {Component, OnInit} from '@angular/core';
import {FormService} from '../../../../demo/service/form.service';
import {Form} from '../../../../demo/domain/form';
import {Observable} from 'rxjs';
import {FavoriteService} from '../../../../demo/service/favorite.service';
import {Router} from '@angular/router';
import {SharedDataService} from "../../../../demo/service/sharedataservice";

@Component({
    selector: 'app-allforms',
    templateUrl: './allforms.component.html',
    styleUrls: ['./allforms.component.scss']
})
export class AllformsComponent implements OnInit {

    /*    id: number;
        formName: string;
        userId: number;*/
    form: Form[];
    cols: any[];
    favorites: Form[] = [];
    formId: number;
    favorite: boolean;
    displayBasic: boolean;
    temp: number;
    formLength: number;

    formNameForContent: string;
    formidForContent: number;

    // tslint:disable-next-line:ban-types

    constructor(private router: Router, private sharedDataService: SharedDataService, private formService: FormService, private favoriteservice: FavoriteService) {
    }

    ngOnInit(): void {
        this.formService.getFormsAll().subscribe(value => {
            this.form = value;
            this.formLength = value.length;
        });
        this.cols = [
            {field: 'id', header: 'ID'},
            {field: 'formName', header: 'FormName'},
            {field: 'userId', header: 'UserID'},
            {field: 'createTimestamp', header: 'Create Time'},
            {field: 'updateTimestamp', header: 'Update Time'},

        ];

    }

    addToFavorites(index: number) {
        console.log(this.form);
        this.form[index].favorite = this.form[index].favorite === false || this.form[index].favorite === undefined;
        this.formService.updateForm(this.form[index]).subscribe(value => this.form[index] = value);
    }

    addToArchives(index: number) {
        this.form[index].archived = this.form[index].archived === false || this.form[index].archived === undefined;
        this.formService.updateForm(this.form[index]).subscribe(value => this.form[index] = value);
    }

    addToTrash(index: number) {
        this.form[index].removed = this.form[index].removed === false || this.form[index].removed === undefined;
        this.formService.updateForm(this.form[index]).subscribe(value => this.form[index] = value);
    }

    openTheForm(id: number) {
        this.temp = id;
        this.sharedDataService.setData(this.temp);
        this.router.navigate(['formcontent']);
    }
}
