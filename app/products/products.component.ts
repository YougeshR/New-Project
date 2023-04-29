import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private auth:AuthService) { }
  user ={localID:"vvb",displayName:"gggg"};
 
  ngOnInit(): void {
    this.auth.canAccess();
    if (this.auth.isAuthenicated()){
     //call the user details service
     this.auth.details().subscribe({
      next:data=>{
        this.user.localID = data.users[0].localID;
        this.user.displayName = data.users[0].displayName;
      }
     })
    }
  }

}
