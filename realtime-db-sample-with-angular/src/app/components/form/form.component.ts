import { Component, OnInit } from '@angular/core';
import { FirebaseUsecaseService } from 'firebase';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private readonly firebase: FirebaseUsecaseService) { }

  ngOnInit(): void {
  }

  registerData() {
    this.firebase.setDocument();
  }
}
