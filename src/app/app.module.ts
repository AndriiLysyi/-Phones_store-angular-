import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhoneSearchComponent } from './phone-search/phone-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PhonesComponent,
    PhoneDetailComponent,
    MessagesComponent,
    PhoneSearchComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
