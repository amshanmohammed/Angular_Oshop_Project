import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor() {}
  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((data) => {

    });
  }

  login() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.get('email'))
  }
}
