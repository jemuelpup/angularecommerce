import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {


  loginBackground: String = "assets/images/login-background.png";
  loginForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['',[Validators.pattern(/\S+@\S+\.\S+/),Validators.required]],
      password: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if(this.loginForm.status === "VALID"){
      alert("Submit this data to the server "+(this.loginForm.getRawValue()));
    }
  }

}
