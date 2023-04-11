import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) {

   }

   public getAllProducts(){
    return this.http.get('http://localhost:8080/product');
   }
  
   public saveProducts(prod:Product){
    return this.http.post("http://localhost:8080/product",prod);
   }

   public deleteProducts(id:number){
    return this.http.delete("http://localhost:8080/product/" + id);
   }

  //  public updateProducts(id:number){
  //   return this.http.put("http://localhost:8080/product/" + id);
  //  }

}
