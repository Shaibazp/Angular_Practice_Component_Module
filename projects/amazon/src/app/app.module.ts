import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmazonIndexComponent } from './component/amazon-index/amazon-index.component';
import { AmazonHomeComponent } from './component/amazon-home/amazon-home.component';
import { AmazonJeweleryComponent } from './component/amazon-jewelery/amazon-jewelery.component';
import { AmazonElectronicsComponent } from './component/amazon-electronics/amazon-electronics.component';
import { AmazonMensComponent } from './component/amazon-mens/amazon-mens.component';
import { AmazonWomensComponent } from './component/amazon-womens/amazon-womens.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { fakestore } from 'projects/shopping/src/app/service/fakestore.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './component/details/details.component';
import { MoredetailsComponent } from './component/moredetails/moredetails.component';
import { AdminPortalComponent } from './component/admin-portal/admin-portal.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AmazonIndexComponent,
    AmazonHomeComponent,
    AmazonJeweleryComponent,
    AmazonElectronicsComponent,
    AmazonMensComponent,
    AmazonWomensComponent,
    NotFoundComponent,
    DetailsComponent,
    MoredetailsComponent,
    AdminPortalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [fakestore],
  bootstrap: [AmazonIndexComponent]
})
export class AppModule { }
