import { NgModule } from '@angular/core';
import { HomeComponent} from "./home/home.component";
import { CountrycodeComponent} from "./countrycode/countrycode.component";
import { ContinentnameComponent } from "./continentname/continentname.component";
import { CapitalComponent } from "./capital/capital.component";
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "countrycode",
    component: CountrycodeComponent
  },
  {
    path: "continentname",
    component: ContinentnameComponent
  },
  {
    path: "capital",
    component: CapitalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
