import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AnamnesisComponent} from './home/profile/extra/anamnesis/anamnesis.component';
import {AlertModule} from 'ngx-bootstrap';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeRoutingModule} from './home/home-routing.module';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    AnamnesisComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AlertModule.forRoot(),
    HomeRoutingModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
