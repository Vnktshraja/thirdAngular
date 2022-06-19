import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList= ["Apple","Samsung","OnePlus","Oppo","vivo","Nokia"];

  carList = ["Honda","hundai","Toyota","BMW","Audi","Benz"];

  constructor() { }

  ngOnInit(): void {
  }

  remove(){
    this.productList.pop();
  }

  removeData(){
    this.carList.pop();
  }

  isAvailableProduct(){
      if(this.productList.length > 0)
        return true;
      return false;    
  }

  isAvailablecar(){
    if(this.productList.length > 0)
      return true;
    return false; 
    
  
}

}
