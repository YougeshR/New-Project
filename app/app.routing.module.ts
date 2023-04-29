import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckComponent } from './check/check.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    { path: '**', redirectTo: 'check', pathMatch: 'full' },
    { path: 'check', component: CheckComponent },
    { path: 'cart', component: CartComponent },
    {
        component: SignupComponent,
        path: 'signup',
        canActivate: [AuthGuard]
    }

    // otherwise redirect to home
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }