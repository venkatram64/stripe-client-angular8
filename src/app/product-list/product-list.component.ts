import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from "rxjs";
import {ProductService} from '../product.service';
import {Product} from '../product';
import {ProductDetailsComponent} from '../product-details/product-details.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.products = this.productService.getProductList();
  }  

  deleteProduct(id: number){
    this.productService.deleteProduct(id).
      subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  productDetails(id: number){
    this.router.navigate(['details',id]);
  }

  updateProduct(id: number){
    this.router.navigate(['update',id]);
  }

}
