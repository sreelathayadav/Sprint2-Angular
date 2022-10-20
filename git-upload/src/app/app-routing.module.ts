import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpurchasedbooksComponent } from './allpurchasedbooks/allpurchasedbooks.component';
import { BuybookComponent } from './buybook/buybook.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { FooterComponent } from './footer/footer.component';
import { GetallbooksComponent } from './getallbooks/getallbooks.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RefundComponent } from './refund/refund.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { SignupComponent } from './signup/signup.component';
import { TokenComponent } from './token/token.component';

const routes: Routes = [{path: '', component:HeaderComponent},
                        {path: '', component:FooterComponent},
                         {path: 'signup', component:SignupComponent},
                         {path: 'login', component:LoginComponent},
                         {path: 'createbook', component:CreatebookComponent},
                         {path: 'searchbook', component:SearchbookComponent},
                         {path: 'buybook', component:BuybookComponent},
                         {path: 'home', component:HomeComponent},
                         {path: 'allpurchasedbooks', component:AllpurchasedbooksComponent},
                         {path: 'refund', component:RefundComponent},
                         {path:'getallbooks', component:GetallbooksComponent},
                         {path:'searchbook', component:SearchbookComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
