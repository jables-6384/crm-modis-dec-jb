import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignOffComponent } from './pages/page-sign-off/page-sign-off.component';


@NgModule({
  declarations: [PageSignInComponent, PageSignOffComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
