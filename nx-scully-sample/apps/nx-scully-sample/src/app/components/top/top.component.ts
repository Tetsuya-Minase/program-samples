import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@nx-scully-sample/api-interfaces';

@Component({
  selector: 'nx-scully-sample-root',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent {
  hello$ = this.http.get<Message>('/v1/hello');
  constructor(private http: HttpClient) {}
}
