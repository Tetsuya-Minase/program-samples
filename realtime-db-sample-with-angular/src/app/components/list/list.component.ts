import { Component, OnInit } from '@angular/core';
import { FirebaseUsecaseService } from 'firebase';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private _items = new BehaviorSubject<any[]>([]);
  constructor(private firebase: FirebaseUsecaseService) {
    firebase.fetchDocumentAll().subscribe(res => {
      console.log('res: ', res);
      this._items.next(res);
    }, err => {
      console.log('error', err);
    });
  }

  ngOnInit(): void {
  }

  get items() {
    return this._items;
  }
}
