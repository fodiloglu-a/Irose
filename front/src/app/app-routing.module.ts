import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";

import {CurrencyPageComponent} from "./pages/currency-page/currency-page.component";
import {GraphPageComponent} from "./pages/graph-page/graph-page.component";
import {GrapgsComponent} from "./pages/graph-page/weakGraph/grapgs.component";
import {MonthGraphComponent} from "./pages/graph-page/month-graph/month-graph.component";
import {YearGraphComponent} from "./pages/graph-page/year-graph/year-graph.component";
import {FiveYearGraphComponent} from "./pages/graph-page/five-year-graph/five-year-graph.component";
import {AllTimeGraphComponent} from "./pages/graph-page/all-time-graph/all-time-graph.component";

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'currency', component: CurrencyPageComponent },
  { path: 'graph', component: GraphPageComponent, children: [
      { path: '', redirectTo: 'graph', pathMatch: 'full' }, // Varsayılan alt bileşen rotası
      { path: 'graph/week-graph', component: GrapgsComponent },
      { path: 'graph/month-graph', component: MonthGraphComponent },
      { path: 'graph/year-graph', component: YearGraphComponent },
      { path: 'graph/five-year-graph', component: FiveYearGraphComponent },
      { path: 'graph/all-time-graph', component: AllTimeGraphComponent },
    ]},
  // Add other routes as needed
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Redirect to home by default
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
