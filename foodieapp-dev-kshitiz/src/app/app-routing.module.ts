import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { FavTabComponent } from './fav-tab/fav-tab.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthoGuard } from './guards/autho.guard';
import { OwnerGuard } from './guards/owner.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterRestaurentFormComponent } from './register-restaurent-form/register-restaurent-form.component';
import { RestaurantOwnerComponent } from './restaurant-owner/restaurant-owner.component';
import { RestaurentDetailsComponent } from './restaurent-details/restaurent-details.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashComponent } from './userdash/userdash.component';


const routes: Routes = [
  {path:'',redirectTo: 'home-view', pathMatch: 'full'},
  {path:'home-view',component:HomeComponent},
  {path:'signup-view',component:SignupComponent},
  {path:'login-view',component:LoginComponent},
  {path:'about-view',component:AboutComponent},
  {path:'register-restaurant',component:RegisterRestaurentFormComponent,canActivate:[AuthoGuard]},
  {path:'adminView',component:AdminDashboardComponent,canActivate:[AdminGuard]},
  {path:'userView',component:UserdashComponent,canActivate:[AuthoGuard]},
  {path:'ownerView',component:RestaurantOwnerComponent,canActivate:[OwnerGuard]},
  {path:'resturant-details/:restaurantId',component:RestaurentDetailsComponent},
  {path:'cart-view',component:CartComponent,canActivate:[AuthoGuard]},
  {path:'fav-view',component:FavTabComponent,canActivate:[AuthoGuard]},
  {path:'*',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
