import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BaseRoutingModule } from './base-routing.module';
import { VacancyModule } from '../../pages/vacancy/vacancy.module';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TopbarComponent } from '../components/topbar/topbar.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BaseRoutingModule,
    VacancyModule
  ],
  declarations: [
    BaseComponent,
    SidebarComponent,
    TopbarComponent
  ],
  providers: [
    
  ]
})
export class BaseModule { }
