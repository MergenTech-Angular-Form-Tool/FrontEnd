import {Component, OnInit} from '@angular/core';
import {FavoriteService} from '../../../../demo/service/favorite.service';
import {Form} from '../../../../demo/domain/form';
import {Router} from '@angular/router';
import {FormService} from '../../../../demo/service/form.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

    form: Form[];
    cols: any[];
    favorites: Form[] = [];
    formId: number;

    constructor(private router: Router, private formService: FormService) {
    }

    ngOnInit(): void {
        this.formService.getFormsAll().subscribe(value => {
            this.form = value;
        });
        this.cols = [
            {field: 'id', header: 'ID'},
            {field: 'formName', header: 'FormName'},
            {field: 'createTimestamp', header: 'Create Time'},
            {field: 'updateTimestamp', header: 'Update Time'},
        ];
    }

    deleteFromFavorites(index: number) {
        this.form[index].favorite = this.form[index].favorite === false || this.form[index].favorite === undefined;
        this.formService.updateForm(this.form[index]).subscribe(value => this.form[index] = value);
    }
}
