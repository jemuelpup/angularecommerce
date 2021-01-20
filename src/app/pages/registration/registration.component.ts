import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  
  loginBackground: String = "assets/images/login-background.png";
  registrationForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      email: ['',[Validators.pattern(/\S+@\S+\.\S+/),Validators.required]],
      password: ["",Validators.required],
      confirmPassword: ["",Validators.required],
      address: ["",Validators.required],
      phoneNumber: ["",Validators.required],
    });
      
   }

  ngOnInit(): void {
  }

  resetForm(){
    console.log("testing the reset")
    this.registrationForm.reset()
  }

  submitForm() {
    console.log("Done")
    if(this.registrationForm.status === "VALID"){
      alert("Submit this data to the server "+(this.registrationForm.getRawValue()));
    }
  }
}
