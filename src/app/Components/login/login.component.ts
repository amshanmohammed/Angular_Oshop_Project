import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      ),
    ]),
  });
  constructor() {}
  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((data) => {});
  }

  login() {
    console.log(this.loginForm.value);
    const email = this.loginForm.get('email');
    // email?.setValue('neww')
    // email?.patchValue('hagahsd')
  }
}
