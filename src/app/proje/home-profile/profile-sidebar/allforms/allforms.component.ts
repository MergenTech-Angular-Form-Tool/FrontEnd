import {Component, OnInit} from '@angular/core';
import {FormService} from '../../../../demo/service/form.service';
import {Form} from '../../../../demo/domain/form';
import {Observable} from 'rxjs';
import {FavoriteService} from '../../../../demo/service/favorite.service';
import {Router} from "@angular/router";

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

    constructor(private router: Router , private formService: FormService, private favoriteservice: FavoriteService, private favoriteService: FavoriteService) {
    }

    ngOnInit(): void {
        this.formService.getFormsAll().subscribe(value => {
            this.form = value;
        });
        this.cols = [
            {field: 'id', header: 'ID'},
            {field: 'formName', header: 'FormName'},
            {field: 'userId', header: 'UserID'},
            {field: 'createTimestamp', header: 'Create Time'},
            {field: 'updateTimestamp', header: 'Update Time'}
        ];

    }
    addToFavorites(index: number) {
        this.favoriteService.pushToFavorites(this.favorites, this.form, index);
        console.log(this.favorites);
    }

    addToArchives() {
    }

    addToTrash() {
    }

}
