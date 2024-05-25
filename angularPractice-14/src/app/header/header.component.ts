import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {}
   
   isShow:boolean  = false;  
  productList:any = ['kettle','Toaster','Stove']
  addProduct(client:any){
     this.productList.push(client)
     if(Number.isInteger(this.productList.length/2) === true) {
      this.isShow = true;
    }
    else{
      this.isShow = false;
    }
  }}   
