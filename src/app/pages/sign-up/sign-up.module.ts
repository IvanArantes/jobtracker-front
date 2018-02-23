import {NgModule} from '@angular/core';
import {SignUpComponent} from './sign-up.component';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SignUpModule {}
