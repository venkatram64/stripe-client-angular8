import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from "rxjs";
import {ProductService} from '../product.service';
import {Product} from '../product';
import {ProductDetailsComponent} from '../product-details/product-details.component';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  submitted = false;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  newProduct(): void{
    this.submitted = false;
    this.product = new Product();
  }

  save(){
    this.productService.createProduct(this.product).
      subscribe(data => 
          console.log(data),
          error => console.log(error));
      this.product = new Product();
      this.gotoList();
  }

  gotoList(){
    this.router.navigate(['/products']);
  }

}
