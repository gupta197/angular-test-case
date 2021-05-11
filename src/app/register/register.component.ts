import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
// import { User } from '../models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() RegisterUser = new EventEmitter<RegUser>();

  title: string = "Register"
  submitted: boolean = false
  register: FormGroup;
  users;

  constructor(private userService: LoginServiceService) {

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
    this.users = this.userService.getUsers();
   }

  ngOnInit(): void {

  }


  onSubmit() {
    this.submitted = true
    console.log(`Login ${this.register.value}`);
    if (this.register.valid) {
      this.RegisterUser.emit(
        new RegUser(
          this.register.value.name,
          this.register.value.email,
          this.register.value.phone,
          this.register.value.password
        )
      );
    }
  }

}

export class RegUser {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public password: string
    ) {
  }
}

