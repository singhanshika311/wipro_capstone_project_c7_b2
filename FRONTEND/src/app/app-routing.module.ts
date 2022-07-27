import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BulkUploadComponent } from './bulk-upload/bulk-upload.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'category',component:CategoryComponent},
  {path:'products',component:ProductsComponent},
  {path:'orders',component:OrdersComponent},
  {path:'profile',component:ProfileComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'users',component:UsersComponent},
  {path:'viewcart',component:ViewcartComponent},
  {path:'history',component:OrderhistoryComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'products/Bulkupload',component:BulkUploadComponent},
  {path:'products/bupload' , redirectTo:'Bulkupload',pathMatch:'full'},
  {path:'products/eemail',component:EmailComponent},
  {path:'products/Email' , redirectTo:'eemail',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
