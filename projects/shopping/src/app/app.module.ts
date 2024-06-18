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
    NgForTrackbyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NgForTrackbyComponent]
})
export class AppModule { }
