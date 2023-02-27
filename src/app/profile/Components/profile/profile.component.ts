import { ApiService } from './../../../services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  userData: any;
  userUpdateForm = new FormGroup({}) as FormGroup;
    constructor(private as : ApiService){

    }
  ngOnInit(): void {
    this.userUpdateForm.valueChanges.subscribe(console.log);
    this.userData = JSON.parse(localStorage.getItem('userDetails') as any);
    this.populatUerDetails();
  }
  populatUerDetails() {
    this.userUpdateForm = new FormGroup({
      username: new FormControl(this.userData.username),
      firstName: new FormControl(this.userData.firstName),
      lastName: new FormControl(this.userData.lastName),
      email: new FormControl(this.userData.email),
      gender: new FormControl(this.userData.gender),
    });
  }
  handleUpdate() {
    const newuser = this.userUpdateForm.value;
      this.as.requestUpdateUserDetails(this.userData.id,newuser).subscribe((res)=>{
        localStorage.setItem('userDetails',JSON.stringify(res))
        console.log(res)
      })
  }

  isUserTouched(){
    return this.userUpdateForm.touched && this.userUpdateForm.dirty
  }
}
