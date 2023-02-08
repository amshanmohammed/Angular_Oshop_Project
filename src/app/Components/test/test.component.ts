import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  // anas = {
  //   email: 'anasmomin064@gmail.com',
  //   fname: 'anas',
  //   lname: 'momin',
  //   gender: 'male',
  //   education: 'bca',
  //   address: 'nanded',
  //   number: 7276026626,
  //   mode_of_class: 'online',
  //   where_about_us: 'others',
  // };
  testForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    fname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(12),
    ]),
    lname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(12),
    ]),
    gender: new FormControl('', [Validators.required]),
    education: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
    ]),
    number: new FormControl(0, [
      Validators.required,
      Validators.min(10),
      // Validators.max(),
    ]),
    mode_of_class: new FormControl('', [Validators.required]),
    where_about_us: new FormControl('', [Validators.required]),
  });

  constructor() {}

  handlesubmit() {
    const email = this.testForm.get('email');
    const genderControls = this.testForm.get('number');
    console.log(genderControls);
  }
  ngOnInit(): void {}
}
