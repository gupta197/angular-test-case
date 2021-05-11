import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title: string = "Register"
  submitted: boolean = false
  register: FormGroup;

  constructor() {
    this.register = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      email : new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      phone: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {

  }


  onSubmit() {
    this.submitted = true
  }

}
