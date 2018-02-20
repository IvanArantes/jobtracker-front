import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { VacancyModule } from './pages/vacancy/vacancy.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './pages/login/login.module';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BaseModule } from './layout/base/base.module';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { TopbarComponent } from './layout/components/topbar/topbar.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CoreModule,
    SharedModule,
    LoginModule,
    BaseModule,
    AppRoutingModule
  ],
  providers: [
    { 
        provide: HTTP_INTERCEPTORS, 
        useClass: AuthInterceptor, 
        multi: true 
    } 
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
