import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from 'src/app/utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      // Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      // Validators.pattern(
      //   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      // ),
    ]),
  });
  constructor(private as: ApiService) {}
  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(console.log);
  }

  login() {
    // console.log('login works')
    const user = this.loginForm.value;
    this.as
      .requestLogin(user).subscribe((data)=>{
        console.log(data)
      },(error)=>{
        console.log(error)
      })
  }
}
