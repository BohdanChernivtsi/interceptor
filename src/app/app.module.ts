import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListItemComponent } from './list-item/list-item.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ListItem2Component } from './list-item2/list-item2.component';
import { ListItem3Component } from './list-item3/list-item3.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    NavComponent,
    ListItem2Component,
    ListItem3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
