import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetallplantsComponent } from './getallplants/getallplants.component';
import{HttpClientModule} from '@angular/common/http'
import { AddplantsComponent } from './addplants/addplants.component';
import { FormsModule } from '@angular/forms';
import { UpdateplantComponent } from './updateplant/updateplant.component';
@NgModule({
  declarations: [
    AppComponent,
    GetallplantsComponent,
    AddplantsComponent,
    UpdateplantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
