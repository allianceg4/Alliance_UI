import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { SharedModule } from './shared/shared.module';

const materialModules = [
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatListModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,   
  ],

  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
