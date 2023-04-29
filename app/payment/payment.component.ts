import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  implements OnInit {
  
  public products : any = []
 
  http: any;
  item: any;

  constructor(private cartService : CartService){ }
    ngOnInit(): void {
      
  
    }
    removeItem(item :  any){
      this.cartService.removeCartItem(item);
    }  
    
  }
  

  
  
 
  