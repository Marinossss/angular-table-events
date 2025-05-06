import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FocusMonitor } from '@angular/cdk/a11y';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-reactive-form',
  imports: [ ReactiveFormsModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule ],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css'
})
export class EpersonReactiveFormComponent {

  form = new FormGroup({
    givenName : new FormControl('', Validators.required),
    surnName: new FormControl('', Validators.required),
    age: new FormControl(18, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    education: new FormControl('', Validators.required)
  })

  onSubmit(data: any) {
    console.log("Data", data)
    console.log(this.form)
    console.log("givenName>>", this.form.controls['givenName'].value)
    // this.form.controls["surnName"].setValue("Papakis")
  }

  onSetValue(){
    this.form.setValue({
      givenName: "Kostas",
      surnName: "lalakis",
      age: 24,
      email:"kostas@example.com",
      education: "Bachelor degree"
    })
  }
}
