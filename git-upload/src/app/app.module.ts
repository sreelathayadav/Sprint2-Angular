import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatebookComponent } from './createbook/createbook.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { BuybookComponent } from './buybook/buybook.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllpurchasedbooksComponent } from './allpurchasedbooks/allpurchasedbooks.component';
import { RefundComponent } from './refund/refund.component';
import { GetallbooksComponent } from './getallbooks/getallbooks.component';
import { TokenComponent } from './token/token.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CreatebookComponent,
    SearchbookComponent,
    BuybookComponent,
    HeaderComponent,
    FooterComponent,
    AllpurchasedbooksComponent,
    RefundComponent,
    GetallbooksComponent,
    TokenComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
