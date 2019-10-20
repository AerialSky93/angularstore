import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { FormBuilder, FormGroup, Validators, NgForm} from "@angular/forms";
import { ProductconnectService } from '../productconnect.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  product: Product = new Product();
  addproductform: FormGroup;

  constructor(private productconnectService: ProductconnectService) {}

  ngOnInit() {
  }

  createProduct(){
    console.log('Creating Product',this.product)

    this.productconnectService.addProduct(this.product).subscribe((data: any)=>{
      console.log(data)
      this.product = data
    })
  }
}

