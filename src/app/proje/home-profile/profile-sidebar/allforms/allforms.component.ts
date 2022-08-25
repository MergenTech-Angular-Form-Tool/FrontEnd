import {Component, OnInit} from '@angular/core';
import {FormService} from '../../../../demo/service/form.service';
import {Form} from '../../../../demo/domain/form';
import {FavoriteService} from '../../../../demo/service/favorite.service';
import {Router} from '@angular/router';
import {SharedDataService} from '../../../../demo/service/sharedataservice';

// @ts-ignore
@Component({
    selector: 'app-allforms',
    templateUrl: './allforms.component.html',
    styleUrls: ['./allforms.component.scss']
})

export class AllformsComponent implements OnInit {

    form: Form[];
    cols: any[];
    favorites: Form[] = [];
    formId: number;
    favorite: boolean;
    temp: number;
    temp2: string;
    formLength: number;



    constructor(private router: Router, private sharedDataService: SharedDataService, private formService: FormService) {
    }

    ngOnInit(): void {
        this.formService.getFormsAll().subscribe(value => {
            this.form = value;
            this.formLength = value.length;
        });
        this.cols = [
            {field: 'id', header: 'ID'},
            {field: 'formName', header: 'FormName'},
            {field: 'createTimestamp', header: 'Create Time'},
            {field: 'updateTimestamp', header: 'Update Time'},
        ];


    }

    addToFavorites(index: number) {
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

    openTheForm(id: number, name: string) {
        this.temp = id;
        this.temp2 = name;
        this.sharedDataService.setData2(this.temp2);
        this.sharedDataService.setData(this.temp);
        this.router.navigate(['formcontent']);
    }

}
