import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Credentials } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})

export class UserLoginComponent {
  userService = inject(UserService)

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log(this.form.value)
    const credentials = this.form.value as Credentials
    
    this.userService.loginUser(credentials)
      .subscribe({
        next: (response) => {
          console.log("Logged in", response)
        },
        error: (error) => {
          console.log("Not logged in", error)
        }
      })
  }
}
