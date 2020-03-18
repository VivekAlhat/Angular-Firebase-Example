import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;
  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
        validator: this.checkIfMatchingPasswords("password", "confirmPassword")
      })
  }

  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      let password = group.controls[passwordKey]
      let confirmPassword = group.controls[confirmPasswordKey]

      if (password.value == confirmPassword.value) {
        return;
      } else {
        confirmPassword.setErrors({
          notEqualToPassword: true
        })
      }
    };
  }

  onSubmit(myForm) {
    // console.log(myForm.value); logs JSON object to the console
    let email: string = myForm.value.email;
    let password: string = myForm.value.password;
    let firstName: string = myForm.value.firstName;
    let lastName: string = myForm.value.lastName;
    firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
      console.log(response);
      let randomNumber = Math.floor(Math.random() * 1000)
      response.user.updateProfile({
        displayName: firstName + " " + lastName,
        photoURL: "https://api.adorable.io/avatars/" + randomNumber
      }).then(() => {
        this.message = "You have been signed up successfully. Please log in."
      })
    }).catch((error) => {
      console.log(error);
      this.userError = error;
    })
  }

  ngOnInit(): void {
  }
}
