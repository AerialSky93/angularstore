import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { FormBuilder, FormGroup, FormsModule, Validators, NgForm} from "@angular/forms";
import { ProductconnectService } from '../productconnect.service';
import {   ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  product: Product = new Product();
  editproductform: FormGroup;

  constructor(private productconnectService: ProductconnectService, private formBuilder: FormBuilder) {

    this.editproductform = this.formBuilder.group({
      'ProductName' : [null, Validators.required],
      'ProductDescription' : [null, Validators.required]
    });
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    console.log('Getting Product',this.product)

    this.productconnectService.getproduct().subscribe((data: any)=>{
      console.log(data)
      this.product = data;
      this.editproductform.setValue({
        ProductName: data.productName,
        ProductDescription: data.productDescription
      });
    }) 
  }

  editProduct(){
    console.log('Creating Product',this.product)

    this.productconnectService.editproduct(this.product).subscribe((data: any)=>{
      console.log(data)
      this.product = data;
      this.editproductform.setValue({
        ProductName: data.productName,
        ProductDescription: data.productDescription
      });
    })
  }
}

