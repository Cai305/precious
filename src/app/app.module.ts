import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FooterComponent } from './main/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImgpanelComponent } from './main/components/imgpanel/imgpanel.component';
import { LoginComponent } from './main/auth/login/login.component';
import { RegisterComponent } from './main/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { Imgpanel2Component } from './main/components/imgpanel2/imgpanel2.component';
import { Imgpanel3Component } from './main/components/imgpanel3/imgpanel3.component';
import { CartComponent } from './main/cart/cart.component';
import { Page404Component } from './main/page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ImgpanelComponent,
    LoginComponent,
    RegisterComponent,
    Imgpanel2Component,
    Imgpanel3Component,
    CartComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
