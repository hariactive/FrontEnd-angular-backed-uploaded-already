import { Component,OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  constructor(private productService:ProductServiceService){}

  ngOnInit(): void {
      
  }
  saveProduct(data:Product){
    this.productService.saveProducts(data).subscribe( d => console.log("Product saved"));
  }

}
