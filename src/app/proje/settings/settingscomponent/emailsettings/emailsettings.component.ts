import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../demo/domain/product';
import {ProductService} from '../../../../demo/service/productservice';
import {ConfirmationService, MessageService} from 'primeng/api';



@Component({
    selector: 'app-emailsettings',
    templateUrl: './emailsettings.component.html',
    styleUrls: ['./emailsettings.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class EmailsettingsComponent implements OnInit {
    productDialog: boolean;

    products: Product[];

    product: Product;

    submitted: boolean;

    statuses: any[];
    constructor(private productService: ProductService, private messageService: MessageService,
                private confirmationService: ConfirmationService) {
    }

    ngOnInit(): void {
        this.productService.getProducts().then(data => this.products = data);

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
    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name.trim()) {
            if (this.product.id) {
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Adres Updated', life: 3000});
            }
            else {
                this.product.id = this.createId();
                this.products.push(this.product);
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Adres Created', life: 3000});
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }


}
