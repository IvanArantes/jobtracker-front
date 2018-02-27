import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignUpService} from '../../shared/service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  form: FormGroup;


  constructor(private fb: FormBuilder,
              private signUpService: SignUpService) {
   this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  signUp() {
    const val = this.form.value;

    if (val.name && val.password && val.email) {
      this.signUpService.signUp(val.name, val.password, val.email)
        .subscribe(
          () => {
            console.log('User is registered');
            this.clearForm();
          }
        );
    }
  }

  clearForm() {
    this.form.value.name = '';
    this.form.value.password = '';
    this.form.reset();
  }
}
