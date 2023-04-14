import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
import { first } from 'rxjs';
import { SnackBarService } from 'src/app/_services/snack-bar.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  signUpform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@bajajfinserv.com$/)]),
    teamName : new FormControl('',[Validators.required]),
    userName : new FormControl('',[Validators.required]),
  });

  constructor(private snackBarService: SnackBarService){}

  ngOnInit(): void {
    
  }

  getEmailErrorMessage() {
    if (this.signUpform.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    else if (this.signUpform.controls.email.hasError('pattern')) {
      return 'Please enter a valid official email';
    }

    return 'Not a valid email';
  }

  getUserNameErrorMessage() {
    if (this.signUpform.controls.teamName.hasError('required')) {
      return 'You must enter a value';
    }
    return 'You must enter a value';
  }

  getTeamNameErrorMessage() {
    if (this.signUpform.controls.userName.hasError('required')) {
      return 'You must enter a value';
    }
    return 'You must enter a value';
  }

  onSubmit() {
    console.log(this.signUpform.value);
    this.snackBarService.showSnackBar('Form submitted successfully', 'Close');
  }


}
