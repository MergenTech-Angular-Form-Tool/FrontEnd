import {Component, OnInit} from '@angular/core';
import {Form} from '../../../../demo/domain/form';
import {Router} from '@angular/router';
import {FormService} from '../../../../demo/service/form.service';
import {FavoriteService} from '../../../../demo/service/favorite.service';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

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
    position: string;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private formService: FormService, private favoriteservice: FavoriteService, private confirmationService: ConfirmationService, private messageService: MessageService
                ) {
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

    confirm2(index: number) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.messageService.add({severity: 'info', summary:'Confirmed', detail:'Record deleted'});
                this.deleteForm(index);
            },
            reject: (type) => {
                switch (type) {
                    case ConfirmEventType.REJECT:
                        this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                        break;
                    case ConfirmEventType.CANCEL:
                        this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                        break;
                }
            }
        });

    }
}
