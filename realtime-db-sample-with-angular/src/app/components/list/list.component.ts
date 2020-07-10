import { Component } from '@angular/core';
import { FirebaseUsecaseService } from 'firebase-library';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  private items$ = new BehaviorSubject<any[]>([]);
  constructor(private readonly firebase: FirebaseUsecaseService) {
    firebase.fetchDocumentAll().subscribe(res => {
      this.items$.next(res);
    }, err => {
      console.log('error', err);
    });
  }

  get items() {
    return this.items$;
  }
}
