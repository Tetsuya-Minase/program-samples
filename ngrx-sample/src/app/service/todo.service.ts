import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private http: HttpClient) {
    }

    public fetchAll(): Observable<Array<string>> {
        return Observable.create(observable => {
            observable.next(['task1', 'task2', 'task3']);
            observable.complete();
            return observable;
        });
    }
}
