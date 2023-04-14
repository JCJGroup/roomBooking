
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  
  otp !: string | null;
  showOtpComponent = true;

  @ViewChild(NgOtpInputComponent, { static: false }) ngOtpInput !: NgOtpInputComponent;

  config: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: ''
  };


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@bajajfinserv.com$/)])
  });

  getErrorMessage() {
    if (this.loginForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    else if (this.loginForm.controls.email.hasError('pattern')) {
      return 'Please enter a valid official email';
    }

    return 'Not a valid email';
  }



  onOtpChange(otp:string) {
    this.otp = otp;
  }



}
