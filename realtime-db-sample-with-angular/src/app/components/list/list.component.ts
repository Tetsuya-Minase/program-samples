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
  private _sample = new BehaviorSubject<any[]>([]);
  constructor(private readonly firebase: FirebaseUsecaseService) {
    firebase.fetchDocumentByKey('key1').subscribe(res => {
      console.log('res single: ', res);
      
    }, err => {
      console.log('err: ', err);
      
    });
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
