import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NetflixRegister} from '../app/component/netflix-register.component';
import { LoginComponent } from './component/login/login.component';
import { NetflixIndexComponent } from './component/Netflix/netflix-index/netflix-index.component';
import { NetflixHeaderComponent } from './component/Netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './component/Netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './component/Netflix/netflix-register/netflix-register.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { FakestoreComponent } from './component/fakestore/fakestore.component';
import { ContentProjectionComponent } from './component/content-projection/content-projection.component';
import { MobilesDetailsComponent } from './component/mobiles-details/mobiles-details.component';
import { NgSwitchProductComponent } from './component/ng-switch-product/ng-switch-product.component';
import { NgForDemoComponent } from './component/ng-for-demo/ng-for-demo.component';
import { NgForPropertiesComponent } from './component/ng-for-properties/ng-for-properties.component';
import { NgForTrackbyComponent } from './component/ng-for-trackby/ng-for-trackby.component';
import { ShopperTemplateComponent } from './component/shopper-template/shopper-template.component';
import { ClassBindingComponent } from './component/class-binding/class-binding.component';
import { EventBindingComponent } from './component/event-binding/event-binding.component';
import { EmiCalculatorComponent } from './component/emi-calculator/emi-calculator.component';
import { BMIComponent } from './component/bmi/bmi.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { ProductsDataComponent } from './component/products-data/products-data.component';
import { FiltersDataComponent } from './component/filters-data/filters-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixRegister,
    LoginComponent,
    NetflixIndexComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
    DataBindingComponent,
    FakestoreComponent,
    ContentProjectionComponent,
    MobilesDetailsComponent,
    NgSwitchProductComponent,
    NgForDemoComponent,
    NgForPropertiesComponent,
    NgForTrackbyComponent,
    ShopperTemplateComponent,
    ClassBindingComponent,
    EventBindingComponent,
    EmiCalculatorComponent,
    BMIComponent,
    ParentComponent,
    ChildComponent,
    ProductsDataComponent,
    FiltersDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductsDataComponent]
})
export class AppModule { }
