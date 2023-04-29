import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router'; 

export interface Product {
  price: number;
  prodId: number;
  img: string;
}
interface CartItem {
  prodId: number;
  price: number;
  image: string;
  
}
var arr=[];
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  public productList : any ;
  public filterCategory: any ;
  searchKey:string = "" ;
  categories: any;
  constructor(private api : ApiService, private cartService : CartService){}

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any)=>{
        if(a.category === "women's clothing" || a.category === "men's clothing"){
          a.category ="fashion";
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
  /*  this.cartService.search.subscribe((val:any)=>{
      this.searchKey =val;
    })*/
  }
 public products: Product[]= [
    {
        prodId: 1,
        img:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95
    },
    {
       prodId: 2,
       img:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
       price: 22.3
    },
    {
     prodId: 3,
     img:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
     price: 55.99
    },
    {
     prodId: 4,
     img:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
     price: 15.99
     },
    {
     prodId: 5,
     img:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
     price: 695
    },
    {
     prodId: 6,
     img:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
     price: 168
    },
    {
     prodId: 7,
     img:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
     price: 9.99
    },
    {
     prodId: 8,
     img:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
     price: 10.99
    },
    {
     prodId: 9,
     img:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
     price: 64
    },
    {
     prodId: 10,
     img:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
     price: 109
    },
    {
     prodId: 11,
     img:"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
     price: 109
    },
    {
     prodId: 12,
     img:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
     price: 114
    },
    {
     prodId: 13,
     img:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
     price: 599
    },
    {
     prodId: 14,
     img:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
     price: 999.99
    },
    {
     prodId: 15,
     img:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
     price: 56.99
    },
    {
     prodId: 16,
     img:"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
     price: 29.95
    },
    {
     prodId: 17,
     img:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
     price: 39.99
    },
    { 
     prodId: 18,
     img:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
     price: 9.85
    },
    {
     prodId: 19,
     img:"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
     price: 7.95
    
    },
    {
     prodId: 20,
     img:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
     price: 12.99
     
    }
 
   ];

  /* public cart: CartItem[] = [];

  public addToCart(product: Product): void {
    const existingItem = this.cart.find(prod => prod.prodId === product.prodId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ prodId: product.prodId, price: product.price, image: product.img, quantity: 1 });
    }
  } */
 
  addtocart(product:any[]){
      this.cartService.addtoCart(product);
     // console.log(product);
      localStorage.setItem('array', JSON.stringify(product));
      
  }
  category(){
    
  }
 filter(category:string){
   this.filterCategory = this.productList
   .filter((a:any)=>{
    if(a.category==category || category==''){
      return a;
    }
   })
 }


}

/*
for (let i = 0; i < this.products.length; i++) {
  if (this.products[i].id === prodId) {
    this.products[i].quantity++;
    break; // Stop looping since we found the matching product id
  }
}

*/