import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { CountrycodeComponent } from './countrycode/countrycode.component';
import { ContinentnameComponent } from './continentname/continentname.component';
import { CapitalComponent } from './capital/capital.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    FilterPipe,
    CountrycodeComponent,
    ContinentnameComponent,
    CapitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
