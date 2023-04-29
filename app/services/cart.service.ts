import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product: any;
  cart: any;
  getProductById(prodId: number) {
    throw new Error('Method not implemented.');
  }
  getSubtotal(): number {
    throw new Error('Method not implemented.');
  }

  public cardItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  search: any;
  prod: any;
  
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  
  setProduct(product : any){
    this.cardItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cardItemList.push(product);
    this.productList.next(this.cardItemList);
    this.getTotalPrice();
    console.log(this.cardItemList);
   /* for (let i = 0; i < this.cardItemList.length; i++) {
      if (this.cardItemList[i].id === prodId) {
        let cardItemList = this.cart.find((product: { id: any; }) => product.id === prodId);
        if (cardItemList) {
          cardItemList
          .quantity++;
        } else {
          this.cart.push({ ...this.product[i], quantity: 1 });
        }
        break; // exit loop once quantity is increased
      }
    }*/
  }
  
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cardItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cardItemList.map((a:any, index:any)=>{
     if(product.id=== a.id){
      this.cardItemList.splice(index,1);
     }
    })
    this.productList.next(this.cardItemList);
  }
  removeAllCart(){
   this.cardItemList = []
   this.productList.next(this.cardItemList);
  }

}
