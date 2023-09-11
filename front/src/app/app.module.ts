import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './pages/component/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CurrencyPageComponent } from './pages/currency-page/currency-page.component';
import { GrapgsComponent } from './pages/graph-page/weakGraph/grapgs.component';
import { GraphPageComponent } from './pages/graph-page/graph-page.component';
import { MonthGraphComponent } from './pages/graph-page/month-graph/month-graph.component';
import { YearGraphComponent } from './pages/graph-page/year-graph/year-graph.component';
import { FiveYearGraphComponent } from './pages/graph-page/five-year-graph/five-year-graph.component';
import { AllTimeGraphComponent } from './pages/graph-page/all-time-graph/all-time-graph.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    HomePageComponent,
    CurrencyPageComponent,
    GrapgsComponent,
    GraphPageComponent,
    MonthGraphComponent,
    YearGraphComponent,
    FiveYearGraphComponent,
    AllTimeGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
