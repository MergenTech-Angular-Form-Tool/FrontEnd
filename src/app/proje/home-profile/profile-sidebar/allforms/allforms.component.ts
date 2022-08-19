import {Component, OnInit} from '@angular/core';
import {FormService} from '../../../../demo/service/form.service';
import {Form} from '../../../../demo/domain/form';
import {Observable} from 'rxjs';
import {FavoriteService} from "../../../../demo/service/favorite.service";

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

    constructor(private formService: FormService, private favoriteservice: FavoriteService) {
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


    isExist() {
        console.log(this.form);
        /*        const keys = Object.keys(this.form);
                const len = keys.length;
                if (len === 0) {
                    console.log('Form yoktur');
                } else {
                    console.log('Form vardır', this.form[0].id);
                }*/
    }
}
