import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartService } from '../services/cart.service';
import { ProductsComponent } from '../products/products.component';
//import { CheckComponent } from '../check/check.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit{
 
  public grandTotal : number = 0 ;
  http: any;
  products: any;
  prod: any;
  prodId:any;
  productadd : boolean = true;
  product=1;
  

  constructor( private cartService : CartService )  { }

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();   
      this.CartDetails();
    
      
    })
  }
  getCartDetails: any=[];
  CartDetails(){
   if(localStorage.getItem('localCart')){
     this.getCartDetails = JSON.stringify(localStorage.getItem('localCart'));
   }
  }
  
   quantity: number =1;
removeItem(item :  any){
  this.cartService.removeCartItem(item);
}
emptycart(){
  this.cartService.removeAllCart();
}


decrease(prod: any){
  this.quantity--;
  if (this.quantity === 1) {
    this.productadd = true;
  }
  
  if(prod.quantity !=1)
  {
    prod.quantity -= 1; 
  }
 
 
}
increase(prod: any){
  this.quantity++;
  if(prod.quantity !=100)
  {
    prod.quantity += 1; 
  }
  
  if (this.quantity > 1) {
    this.productadd = false;
  }
}

public getGrandTotal(): number {
  let grandTotal = 0;
  for (const product of this.products) {
    grandTotal += product.quantity * product.price;
  }
  return grandTotal;
}



 }

 
/*
 if(prod.quantity !=5)
  {
    prod.quantity += 1; 
  }
  this.productadd = false;
*/  
/*

addtocart(){
  for (let i = 0; i < this.products.length; i++) {
    if (this.products[i].id === prodId) {
      this.products[i].quantity++;
      break; // Stop looping since we found the matching product id
    }
  }
  }
*/


