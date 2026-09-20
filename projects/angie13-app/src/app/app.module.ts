import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Page1Component } from './pages/page1/page1.component';
import { AuthenticatedUserLayoutComponent } from './layouts/authenticated-user-layout/authenticated-user-layout.component';
import { UnauthenticatedUserLayoutComponent } from './layouts/unauthenticated-user-layout/unauthenticated-user-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Page1Component,
    AuthenticatedUserLayoutComponent,
    UnauthenticatedUserLayoutComponent,
    HomePageComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
