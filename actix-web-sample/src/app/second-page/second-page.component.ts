import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

type SecondData = {
  id: number;
  name: string;
}
type SecondDataResponse = {
  list: SecondData[];
}

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  private _secondDataList$: SecondData[] = [];

  constructor(private readonly httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get<SecondDataResponse>('/api/second').subscribe(
      res => this._secondDataList$ = res.list,
      err => console.error('err: ', err)
    );
  }
  get secondDataList(): SecondData[] {
    return this._secondDataList$;
  }
}
