import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allforms',
  templateUrl: './allforms.component.html',
  styleUrls: ['./allforms.component.scss']
})
export class AllformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/**form oluşturulursa
 * import { Component, OnInit } from '@angular/core';
 * import { Product } from '../../domain/product';
 * import { ProductService } from '../../service/productservice';
 *
 * @Component({
 *     templateUrl: './tablebasicdemo.html'
 * })
 * export class TableBasicDemo implements OnInit {
 *
 *     products: Product[];
 *
 *     constructor(private productService: ProductService) { }
 *
 *     ngOnInit() {
 *         this.productService.getProductsSmall().then(data => this.products = data);
 *     }
 * }
 */
