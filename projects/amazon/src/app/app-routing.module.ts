import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonHomeComponent } from './component/amazon-home/amazon-home.component';
import { AmazonJeweleryComponent } from './component/amazon-jewelery/amazon-jewelery.component';
import { AmazonElectronicsComponent } from './component/amazon-electronics/amazon-electronics.component';
import { AmazonMensComponent } from './component/amazon-mens/amazon-mens.component';
import { AmazonWomensComponent } from './component/amazon-womens/amazon-womens.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { DetailsComponent } from './component/details/details.component';
import { MoredetailsComponent } from './component/moredetails/moredetails.component';
import { AdminPortalComponent } from './component/admin-portal/admin-portal.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path: "home", component: AmazonHomeComponent},
  {path: "jewelery", component: AmazonJeweleryComponent},
  {path: "electronics", component: AmazonElectronicsComponent},
  {path: "mens", component: AmazonMensComponent},
  {path: "womens", component: AmazonWomensComponent},
  {path: "detailss/:id", component: DetailsComponent,
    children: [
      { 
          path: "more/:id", 
          component: MoredetailsComponent
      }
    ]
  },
  { 
      path: "admin", 
      component: AdminPortalComponent,
      canActivate: [AdminGuardGuard]
  },
  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
