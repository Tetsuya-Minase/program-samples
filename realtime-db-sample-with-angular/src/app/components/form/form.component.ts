import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FirebaseUsecaseService } from 'firebase-library';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  readonly formGroup = new FormGroup({
    key: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required])
  });

  constructor(private readonly firebase: FirebaseUsecaseService) { }

  registerData() {
    this.firebase.setDocument({key: this.key?.value, value: this.value?.value});
  }
  deleteAll() {
    this.firebase.deleteAll();
  }
  
  get key() {
    return this.formGroup.get('key');
  }
  get value() {
    return this.formGroup.get('value');

  }
}
