import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FisioterapiaComponent } from './fisioterapia/fisioterapia.component';
import { HomeComponent } from './home/home.component';
import { TerapiaOndasComponent } from './terapia-ondas/terapia-ondas.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  { path: "fisioterapia", component: FisioterapiaComponent},
  { path: "terapia", component: TerapiaOndasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
