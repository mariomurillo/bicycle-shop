import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  constructor(private productService: ProductsService) {
    this.productService.getProducts().subscribe(p => {
      this.products = p;
    });
  }

  ngOnInit() {
  }

}
