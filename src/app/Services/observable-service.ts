import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';

@Service()
export class ObservableService {
  private http = inject(HttpClient);

  getUsers() {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map((users) => users.map((user) => ({name: user.name.toUpperCase()}))));
  }
}
