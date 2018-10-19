import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AnamnesisComponent} from './home/profile/extra/anamnesis/anamnesis.component';
import {AlertModule} from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from './home/home.module';
import {HomeRoutingModule} from './home/home-routing.module';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    AnamnesisComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HomeRoutingModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
