import {Component, OnInit} from '@angular/core';
import {Form} from '../../../../demo/domain/form';
import {Router} from '@angular/router';
import {FormService} from '../../../../demo/service/form.service';
import {FavoriteService} from '../../../../demo/service/favorite.service';

@Component({
    selector: 'app-trash',
    templateUrl: './trash.component.html',
    styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
    form: Form[];
    cols: any[];
    favorites: Form[] = [];
    formId: number;

    constructor(private router: Router, private formService: FormService, private favoriteservice: FavoriteService) {
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
            {field: 'updateTimestamp', header: 'Update Time'},
        ];
    }

    restoreForm(index: number) {
        this.form[index].removed = this.form[index].removed === false || this.form[index].removed === undefined;
        this.formService.updateForm(this.form[index]).subscribe(value => this.form[index] = value);
    }

    deleteForm(index: number) {
        this.formService.removeForm(this.form[index].id).subscribe(value => this.form[index] = value);
        this.formService.getFormsAll().subscribe(value => {
            this.form = value;
        });
    }

}
