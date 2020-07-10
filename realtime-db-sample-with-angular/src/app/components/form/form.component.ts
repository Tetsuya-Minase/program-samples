import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FirebaseUsecaseService } from 'firebase-library';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup = new FormGroup({
    key: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required])
  });

  private _key: string = '';
  private _value: string = '';
  constructor(private readonly firebase: FirebaseUsecaseService) { }

  ngOnInit(): void {
  }

  async registerData() {
    await this.firebase.setDocument({key: this.key?.value, value: this.value?.value});
  }
  
  get key() {
    return this.formGroup.get('key');
  }
  get value() {
    return this.formGroup.get('value');

  }
}
