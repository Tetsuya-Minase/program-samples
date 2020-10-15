import { HttpService } from './../service/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  private _firstData$: string[] = [];

  constructor(private readonly httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get<string[]>('/api/first').subscribe(
      res => this._firstData$ = res,
      err => console.error('err: ', err)
    );
  }
  get firstData() {
    return this._firstData$;
  }
}
