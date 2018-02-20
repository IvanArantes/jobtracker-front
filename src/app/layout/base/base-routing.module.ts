import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';
import { CreateVacancyComponent } from '../../pages/vacancy/create-vacancy/create-vacancy.component';

const baseRoutes: Routes = [
  { path: 'home', component: BaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(baseRoutes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
