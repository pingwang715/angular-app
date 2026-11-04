import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class ObservableService {
  private http = inject(HttpClient);

  getUsers() : Observable<any>{

    return this.http.get('https://jsonplaceholder.typicode.com/users');
    // return new Observable((observer) => {
    //   observer.next(10);
    //   observer.next(20);
    //   observer.next(30);
    //   observer.complete();
    // });
  }
}
