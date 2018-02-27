import {NgModule} from '@angular/core';
import {SignUpComponent} from './sign-up.component';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SignUpService} from '../../shared/service/sign-up.service';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [SignUpService]
})
export class SignUpModule {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
