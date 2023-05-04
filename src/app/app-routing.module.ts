import { EspecialidadeComponent } from './especialidade/especialidade.component';
import { AcupunturaComponent } from './acupuntura/acupuntura.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FisioterapiaComponent } from './fisioterapia/fisioterapia.component';
import { HomeComponent } from './home/home.component';
import { TerapiaOndasComponent } from './terapia-ondas/terapia-ondas.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  { path: "fisioterapia", component: FisioterapiaComponent},
  { path: "terapia", component: TerapiaOndasComponent},
  { path: "acupuntura", component: AcupunturaComponent},
  { path: "especialidade", component: EspecialidadeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
