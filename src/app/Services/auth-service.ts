import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { tap } from 'rxjs';

@Service()
export class AuthService {
  private http = inject(HttpClient);

  login(username: string, password: string) {
    return this.http.post<{ token: string }>('https://fakestoreapi.com/auth/login', {
      username,
      password,
    }).pipe(tap((res) => {
      localStorage.setItem(`token`, res.token);
    }));
  }
}
