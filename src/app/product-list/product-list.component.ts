import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  productList :any;
  constructor(private productService:ProductServiceService){}

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe(data => this.productList = data);
      console.log(this.productList);
  }

  deleteProducts(id:number){
    this.productService.deleteProducts(id).subscribe(datae => alert("Product deleted"));
    this.ngOnInit();
  }
}
