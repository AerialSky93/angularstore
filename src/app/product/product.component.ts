import { Component, OnInit, Input } from '@angular/core';
import { ProductconnectService } from '../productconnect.service'


@Component
({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit 
{
  @Input() products = [];
  constructor(private productconnectService: ProductconnectService) {}


  ngOnInit() 
  { 
    this.productconnectService.getAll().subscribe((data: any)=>{
        console.log(data);
        this.products = data;
    })
  };
}
