import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NetflixRegister} from '../app/component/netflix-register.component';
import { LoginComponent } from './component/login/login.component';
import { NetflixIndexComponent } from './component/Netflix/netflix-index/netflix-index.component';
import { NetflixHeaderComponent } from './component/Netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './component/Netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './component/Netflix/netflix-register/netflix-register.component';
@NgModule({
  declarations: [
    AppComponent,
    NetflixRegister,
    LoginComponent,
    NetflixIndexComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NetflixIndexComponent]
})
export class AppModule { }
