import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShoesComponent } from './shoes/shoes.component';
import { BillingComponent } from './billing/billing.component';
import { Billing3Component } from './billing3/billing3.component';
import { Billing2Component } from './billing2/billing2.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckComponent } from './check/check.component';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';



const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'signup',component:SignupComponent },
  {path:'login',component:LoginComponent },
  {path:'',redirectTo:'product',pathMatch:'full' },
  {path:'product',component:ProductsComponent },
  {path:'laptop',component:LaptopComponent },
  {path:'mobile',component:MobileComponent },
  {path:'shoes',component:ShoesComponent },
  {path:'billing',component:BillingComponent },
  {path:'billing2',component:Billing2Component },
  {path:'billing3',component:Billing3Component },
  {path:'payment',component:PaymentComponent },
  {path:'check',component:CheckComponent },
  {path:'cart',component:CartComponent }
  

]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    LaptopComponent,
    MobileComponent,
    ShoesComponent,
    BillingComponent,
    Billing3Component,
    Billing2Component,
    PaymentComponent,
    CheckComponent,
    CartComponent,
    FilterPipe
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
