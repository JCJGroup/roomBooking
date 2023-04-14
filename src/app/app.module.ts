import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { LoginComponent } from './shared/login/login.component';

import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomePageComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
