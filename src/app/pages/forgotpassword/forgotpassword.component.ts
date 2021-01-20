import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.less']
})
export class ForgotpasswordComponent implements OnInit {

  loginBackground: String = "assets/images/login-background.png";
  forgotPasswordForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['',[Validators.pattern(/\S+@\S+\.\S+/),Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if(this.forgotPasswordForm.status === "VALID"){
      alert("Submit this data to the server "+(this.forgotPasswordForm.getRawValue()));
    }
  }
}
