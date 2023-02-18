import { ApiService } from './../../services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
// import { createPasswordStrengthValidator } from 'src/app/utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  messageError: any = null;
  subscriptions: Subscription = new Subscription();

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
    this.subscriptions.add(this.loginForm.valueChanges.subscribe(console.log));
    this.subscriptions.add(
      this.as.requestProducts().subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  login() {
    // console.log('login works')
    const user = this.loginForm.value;
    this.subscriptions.add(
      this.as.requestLogin(user).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          this.messageError = err.error.message;
          console.log('messageError', this.messageError);
        }
      )
    );
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.unsubscribe();
  }
}
