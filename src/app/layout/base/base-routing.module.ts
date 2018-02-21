import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';
import { CreateVacancyComponent } from '../../pages/vacancy/create-vacancy/create-vacancy.component';
import { TopbarComponent } from '../components/topbar/topbar.component';

const baseRoutes: Routes = [
  { path: 'home', 
    component: BaseComponent,
    children: [
      {
        path:'vacancies', component: CreateVacancyComponent
      }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(baseRoutes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
