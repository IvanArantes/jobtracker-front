import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {LoginModule} from './pages/login/login.module';
import {AuthInterceptor} from './core/auth/auth.interceptor';
import {BaseModule} from './layout/base/base.module';
import {SignUpModule} from "./pages/sign-up/sign-up.module";
import { FileUploadComponent } from './layout/components/file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CoreModule,
    SharedModule,
    LoginModule,
    BaseModule,
    AppRoutingModule,
    SignUpModule
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
