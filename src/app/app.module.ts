import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnamnesisComponent } from './home/profile/extra/anamnesis/anamnesis.component';
import {AlertModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AnamnesisComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
