import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  private unsubscribe = new Subject<void>();
  openRegister = true;
  openRecover = true;
  submitted: boolean = false;
  isSignedIn = false;

// ------- USER FORM
  signinform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  registerform = this.fb.group({
    email: ['', [Validators.required, Validators.email,Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    checkbox: [false, [Validators.requiredTrue]],
  }, {validator: this.MustMatch('password', 'confirmPassword')
  });

  recoverPassword = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
  })

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // -------- GENERAL AUTH

  get f() {
    return this.registerform.controls;
  }

  MustMatch(controlName: string, matchingControlName: string) {return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {return;}
        if (control.value !== matchingControl.value) {
         matchingControl.setErrors({ mustMatch: true });
        } else {matchingControl.setErrors(null);}
  }}

 // -------- FOR USER LOGIN

  clickToLogin() : void {
    this.openRegister = true;
    this.openRecover = true;
  }

  async login(email: string, password: string) : Promise<void> {
    if(this.signinform.valid){
            this.router.navigate(['/ticket-management']);
        }
  }

  // -------- FOR USER REGISTRATION
  clickToRegister() : void {
    this.openRegister = false;
  }

  async register(email:string, password:string) : Promise<void> {
    if(this.registerform.valid){
    alert("Successfully Registered");
    this.openRegister = true;
    this.openRecover = true;
    }else {
      alert("Invalid credentials");
    }
  }

  // -------- FOR USER RECOVERY
  recover() : void {
    if(this.recoverPassword.valid){
      this.openRecover = true;
    }else {
      alert("Invalid credentials");
    }
  }

  clickToRecover() : void {
    this.openRecover = false;
  }

}
