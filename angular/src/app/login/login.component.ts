import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formGroup = new FormGroup({
    userID: new FormControl('', [
      Validators.required,
      Validators.maxLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    email: new FormControl('', [
      Validators.email,
      this.duplicateEmailValidator()
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  private duplicateEmailValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const ngList = [
        'hoge@example.com',
        'huga@test.co.jp'
      ];
      const duplicate = ngList.includes(control.value);
      return duplicate ? {'duplicateEmail': {value: control.value}} : null;
    };
  }

  public get userID() {
    return this.formGroup.get('userID');
  }
  public get password() {
    return this.formGroup.get('password');
  }
  public get email() {
    return this.formGroup.get('email');
  }
}
