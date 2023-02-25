import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  userData: any;
  userUpdateForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    username: new FormControl(),
  });

  ngOnInit(): void {
    this.userUpdateForm.valueChanges.subscribe(console.log)
    this.userData = JSON.parse(localStorage.getItem('userDetails') as any);
    console.log(this.userData);
    console.log(this.userUpdateForm.get('firstName'))

  }
}
