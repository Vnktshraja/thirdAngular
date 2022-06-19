import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input("phone")
  productList = [];

  @Input("car")
  carList :string[]= [];

  @Output("deleteCar")
  valuechange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeData1(){
    this.valuechange.emit();
  }

}
