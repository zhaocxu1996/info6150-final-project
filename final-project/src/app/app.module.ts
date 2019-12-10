// import { UserComponent } from './users/user.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './products/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    ContactComponent,
    // CheckoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent },
      { path: 'welcome/:id', component: WelcomeComponent },
      { path: 'contact', component: ContactComponent },
      // { path: 'checkout', component: CheckoutComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }

      // { path: '**', component: UserComponent}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
