import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../demo/domain/product';
import {ProductService} from '../../../../demo/service/productservice';
import {ConfirmationService, MessageService} from 'primeng/api';



@Component({
    selector: 'app-emailsettings',
    templateUrl: './emailsettings.component.html',
    styleUrls: ['./emailsettings.component.scss']
})
export class EmailsettingsComponent implements OnInit {
    productDialog: boolean;

    products: Product[];

    product: Product;

    submitted: boolean;

    statuses: any[];
    constructor(private productService: ProductService,
                private messageService: MessageService, private confirmationService: ConfirmationService) {
    }

    ngOnInit(): void {

    }
    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }
    editProduct(product: Product) {
        this.product = {...product};
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => val.id !== product.id);
                this.product = {};
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }
        });
    }

}
