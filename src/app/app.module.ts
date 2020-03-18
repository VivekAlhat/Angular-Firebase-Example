import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { LoginComponent } from './login/login.component';


let firebaseConfig = {
  apiKey: "AIzaSyBpK6JYHeQD4QZ-CbctiNoXunwb1Ft_bxU",
  authDomain: "signup-form-7ca97.firebaseapp.com",
  databaseURL: "https://signup-form-7ca97.firebaseio.com",
  projectId: "signup-form-7ca97",
  storageBucket: "signup-form-7ca97.appspot.com",
  messagingSenderId: "264206051143",
  appId: "1:264206051143:web:76e82df0e5cdc1a5898e62",
  measurementId: "G-JFKVTLPBJX"
};
firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
